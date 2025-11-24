import { describe, it, expect } from 'vitest'
import { readdirSync } from 'fs'
import { join } from 'path'
import {
  loadLocaleFile,
  findVueFilesWithI18n,
  getKeys,
  findMissingKeys,
  findExtraKeys,
  analyzeKeyUsage,
  groupKeysByNamespace,
  KeyUsage
} from './i18n-utils'

const ROOT_DIR = join(__dirname, '..')
const LOCALES_DIR = join(ROOT_DIR, 'i18n/locales')

// Reference locale - all other locales should have these keys
const REFERENCE_LOCALE = 'de'

// All supported locales for global files
// Note: 'es' is disabled for now
const SUPPORTED_LOCALES = ['de', 'en', 'nl']

// Required locales for Vue SFC i18n blocks (components/pages)
// These must be present in every Vue file with an i18n block
const REQUIRED_SFC_LOCALES = ['de', 'en', 'nl']

describe('Global Locale Files (i18n/locales/*.json)', () => {
  const localeFiles = readdirSync(LOCALES_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => ({
      name: f.replace('.json', ''),
      path: join(LOCALES_DIR, f)
    }))

  const localeData: Record<string, { keys: string[]; data: Record<string, unknown> }> = {}

  // Load all locale files
  for (const { name, path } of localeFiles) {
    localeData[name] = loadLocaleFile(path)
  }

  it('should have all expected locale files', () => {
    const localeNames = localeFiles.map(f => f.name)
    for (const locale of SUPPORTED_LOCALES) {
      expect(localeNames).toContain(locale)
    }
  })

  it('should have valid JSON in all locale files', () => {
    for (const { name } of localeFiles) {
      expect(localeData[name]).toBeDefined()
      expect(localeData[name].keys.length).toBeGreaterThan(0)
    }
  })

  describe('Missing translations (compared to reference locale)', () => {
    const localeKeys: Record<string, string[]> = {}
    for (const [name, data] of Object.entries(localeData)) {
      localeKeys[name] = data.keys
    }

    const missing = findMissingKeys(localeKeys, REFERENCE_LOCALE)

    for (const locale of SUPPORTED_LOCALES) {
      if (locale === REFERENCE_LOCALE) continue

      it(`${locale}.json should have all keys from ${REFERENCE_LOCALE}.json`, () => {
        const missingKeys = missing[locale] || []

        if (missingKeys.length > 0) {
          const message = `\n\nMissing ${missingKeys.length} key(s) in ${locale}.json:\n${missingKeys.map(k => `  - ${k}`).join('\n')}\n`
          expect(missingKeys, message).toHaveLength(0)
        }
      })
    }
  })

  describe('Extra translations (not in reference locale)', () => {
    const localeKeys: Record<string, string[]> = {}
    for (const [name, data] of Object.entries(localeData)) {
      localeKeys[name] = data.keys
    }

    const extra = findExtraKeys(localeKeys, REFERENCE_LOCALE)

    for (const locale of SUPPORTED_LOCALES) {
      if (locale === REFERENCE_LOCALE) continue

      it(`${locale}.json should not have extra keys not in ${REFERENCE_LOCALE}.json`, () => {
        const extraKeys = extra[locale] || []

        if (extraKeys.length > 0) {
          const message = `\n\nExtra ${extraKeys.length} key(s) in ${locale}.json not in ${REFERENCE_LOCALE}.json:\n${extraKeys.map(k => `  - ${k}`).join('\n')}\n`
          // This is a warning - extra keys are less critical than missing ones
          console.warn(message)
        }
        // We don't fail the test for extra keys, just warn
        expect(true).toBe(true)
      })
    }
  })
})

describe('Vue Component i18n Blocks', () => {
  const vueFiles = findVueFilesWithI18n(ROOT_DIR)

  it('should find Vue files with i18n blocks', () => {
    expect(vueFiles.length).toBeGreaterThan(0)
  })

  describe('Required locales present', () => {
    for (const { relativePath, i18n } of vueFiles) {
      const localesInFile = Object.keys(i18n)

      describe(relativePath, () => {
        for (const requiredLocale of REQUIRED_SFC_LOCALES) {
          it(`should have "${requiredLocale}" locale`, () => {
            const hasLocale = localesInFile.includes(requiredLocale)
            if (!hasLocale) {
              const message = `\n\nMissing entire "${requiredLocale}" locale block.\nFile only has: ${localesInFile.join(', ')}\n`
              expect(hasLocale, message).toBe(true)
            }
          })
        }
      })
    }
  })

  describe('Translation keys completeness', () => {
    for (const { relativePath, i18n } of vueFiles) {
      const localesInFile = Object.keys(i18n)

      // Use 'de' as reference if available, otherwise first locale
      const refLocale = localesInFile.includes('de') ? 'de' : localesInFile[0]
      const refKeys = getKeys(i18n[refLocale] as Record<string, unknown>)

      // Skip if reference locale has no keys
      if (refKeys.length === 0) continue

      describe(relativePath, () => {
        for (const locale of localesInFile) {
          if (locale === refLocale) continue

          it(`"${locale}" should have all keys from "${refLocale}"`, () => {
            const localeKeys = getKeys(i18n[locale] as Record<string, unknown>)
            const missingKeys = refKeys.filter(key => !localeKeys.includes(key))

            if (missingKeys.length > 0) {
              const message = `\n\nMissing ${missingKeys.length} key(s) in "${locale}" locale:\n${missingKeys.map(k => `  - ${k}`).join('\n')}\n`
              expect(missingKeys, message).toHaveLength(0)
            }
          })
        }
      })
    }
  })
})

describe('Translation Key Consistency', () => {
  it('should not have empty string values in locale files', () => {
    const localeFiles = readdirSync(LOCALES_DIR)
      .filter(f => f.endsWith('.json'))
      .map(f => ({
        name: f.replace('.json', ''),
        path: join(LOCALES_DIR, f)
      }))

    const emptyValues: { locale: string; key: string }[] = []

    for (const { name, path } of localeFiles) {
      const { data } = loadLocaleFile(path)
      checkEmptyValues(data, name, '', emptyValues)
    }

    if (emptyValues.length > 0) {
      const message = `\n\nFound ${emptyValues.length} empty translation value(s):\n${emptyValues.map(e => `  - ${e.locale}: ${e.key}`).join('\n')}\n`
      expect(emptyValues, message).toHaveLength(0)
    }
  })
})

function checkEmptyValues(
  obj: Record<string, unknown>,
  locale: string,
  prefix: string,
  results: { locale: string; key: string }[]
): void {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string' && value.trim() === '') {
      results.push({ locale, key: fullKey })
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      checkEmptyValues(value as Record<string, unknown>, locale, fullKey, results)
    }
  }
}

describe('Translation Key Usage Analysis', () => {
  const vueFilesWithI18n = findVueFilesWithI18n(ROOT_DIR)
  const deLocalePath = join(LOCALES_DIR, 'de.json')

  it('should analyze global key usage and report summary', () => {
    const report = analyzeKeyUsage(deLocalePath, ROOT_DIR, vueFilesWithI18n)

    console.log('\n' + '='.repeat(80))
    console.log('TRANSLATION KEY USAGE REPORT')
    console.log('='.repeat(80))
    console.log(`\nTotal keys in de.json: ${report.summary.total}`)
    console.log(`├── Used globally (via $t/t): ${report.summary.global}`)
    console.log(`├── In component i18n blocks: ${report.summary.component}`)
    console.log(`└── Unused/not found: ${report.summary.unused}`)

    // Group global keys by namespace for better overview
    const globalByNamespace = groupKeysByNamespace(report.globalKeys)

    console.log('\n' + '-'.repeat(80))
    console.log('GLOBAL KEYS BY NAMESPACE (need to move to components)')
    console.log('-'.repeat(80))

    for (const [namespace, keys] of Object.entries(globalByNamespace).sort()) {
      console.log(`\n📦 ${namespace} (${keys.length} keys)`)
      for (const keyUsage of keys.slice(0, 5)) {
        console.log(`   └── ${keyUsage.key}`)
        console.log(`       Used in: ${keyUsage.usedIn.slice(0, 3).join(', ')}${keyUsage.usedIn.length > 3 ? '...' : ''}`)
      }
      if (keys.length > 5) {
        console.log(`   ... and ${keys.length - 5} more keys`)
      }
    }

    if (report.unusedKeys.length > 0) {
      const unusedByNamespace = groupKeysByNamespace(report.unusedKeys)

      console.log('\n' + '-'.repeat(80))
      console.log('POTENTIALLY UNUSED KEYS (consider removing)')
      console.log('-'.repeat(80))

      for (const [namespace, keys] of Object.entries(unusedByNamespace).sort()) {
        console.log(`\n⚠️  ${namespace} (${keys.length} keys)`)
        for (const keyUsage of keys) {
          console.log(`   └── ${keyUsage.key}`)
        }
      }
    }

    console.log('\n' + '='.repeat(80))

    // This test always passes, it's for reporting only
    expect(report.summary.total).toBeGreaterThan(0)
  })

  it('should list all global keys that need component migration', () => {
    const report = analyzeKeyUsage(deLocalePath, ROOT_DIR, vueFilesWithI18n)

    // Create a detailed migration guide
    const migrationGuide: Record<string, { key: string; files: string[] }[]> = {}

    for (const keyUsage of report.globalKeys) {
      for (const file of keyUsage.usedIn) {
        if (!migrationGuide[file]) {
          migrationGuide[file] = []
        }
        migrationGuide[file].push({ key: keyUsage.key, files: keyUsage.usedIn })
      }
    }

    console.log('\n' + '='.repeat(80))
    console.log('MIGRATION GUIDE: Global keys to component i18n')
    console.log('='.repeat(80))
    console.log('\nFiles that need i18n blocks added or updated:\n')

    const sortedFiles = Object.entries(migrationGuide)
      .sort((a, b) => b[1].length - a[1].length)

    for (const [file, keys] of sortedFiles.slice(0, 20)) {
      console.log(`📄 ${file} (${keys.length} keys)`)
    }

    if (sortedFiles.length > 20) {
      console.log(`\n... and ${sortedFiles.length - 20} more files`)
    }

    console.log('\n' + '='.repeat(80))

    expect(true).toBe(true)
  })
})

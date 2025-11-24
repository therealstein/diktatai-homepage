import { readFileSync, readdirSync, statSync } from 'fs'
import { join, relative } from 'path'

/**
 * Recursively get all keys from an object with dot notation
 */
export function getKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = []

  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    const value = obj[key]

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...getKeys(value as Record<string, unknown>, fullKey))
    } else {
      keys.push(fullKey)
    }
  }

  return keys.sort()
}

/**
 * Load a JSON locale file and return its keys
 */
export function loadLocaleFile(filePath: string): { keys: string[]; data: Record<string, unknown> } {
  const content = readFileSync(filePath, 'utf-8')
  const data = JSON.parse(content) as Record<string, unknown>
  return { keys: getKeys(data), data }
}

/**
 * Extract i18n JSON block from a Vue SFC file
 */
export function extractI18nFromVue(filePath: string): Record<string, Record<string, unknown>> | null {
  const content = readFileSync(filePath, 'utf-8')

  // Match <i18n lang="json"> ... </i18n> block
  const i18nMatch = content.match(/<i18n[^>]*>\s*([\s\S]*?)\s*<\/i18n>/)

  if (!i18nMatch) {
    return null
  }

  try {
    return JSON.parse(i18nMatch[1]) as Record<string, Record<string, unknown>>
  } catch {
    console.warn(`Failed to parse i18n block in ${filePath}`)
    return null
  }
}

/**
 * Find all Vue files with i18n blocks in a directory
 */
export function findVueFilesWithI18n(dir: string, baseDir?: string): { path: string; relativePath: string; i18n: Record<string, Record<string, unknown>> }[] {
  const results: { path: string; relativePath: string; i18n: Record<string, Record<string, unknown>> }[] = []
  const base = baseDir || dir

  const entries = readdirSync(dir)

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      // Skip node_modules and hidden directories
      if (entry === 'node_modules' || entry.startsWith('.')) {
        continue
      }
      results.push(...findVueFilesWithI18n(fullPath, base))
    } else if (entry.endsWith('.vue')) {
      const i18n = extractI18nFromVue(fullPath)
      if (i18n) {
        results.push({
          path: fullPath,
          relativePath: relative(base, fullPath),
          i18n
        })
      }
    }
  }

  return results
}

/**
 * Compare keys between locales and return missing keys
 */
export function findMissingKeys(
  locales: Record<string, string[]>,
  referenceLocale: string
): Record<string, string[]> {
  const referenceKeys = locales[referenceLocale] || []
  const missing: Record<string, string[]> = {}

  for (const [locale, keys] of Object.entries(locales)) {
    if (locale === referenceLocale) continue

    const missingInLocale = referenceKeys.filter(key => !keys.includes(key))
    if (missingInLocale.length > 0) {
      missing[locale] = missingInLocale
    }
  }

  return missing
}

/**
 * Find extra keys in locales that don't exist in reference
 */
export function findExtraKeys(
  locales: Record<string, string[]>,
  referenceLocale: string
): Record<string, string[]> {
  const referenceKeys = locales[referenceLocale] || []
  const extra: Record<string, string[]> = {}

  for (const [locale, keys] of Object.entries(locales)) {
    if (locale === referenceLocale) continue

    const extraInLocale = keys.filter(key => !referenceKeys.includes(key))
    if (extraInLocale.length > 0) {
      extra[locale] = extraInLocale
    }
  }

  return extra
}

export interface KeyUsage {
  key: string
  usedIn: string[]
  usageType: 'global' | 'component' | 'unused'
}

export interface KeyUsageReport {
  globalKeys: KeyUsage[]
  componentKeys: KeyUsage[]
  unusedKeys: KeyUsage[]
  summary: {
    total: number
    global: number
    component: number
    unused: number
  }
}

/**
 * Find all Vue and TS files in a directory recursively
 */
export function findSourceFiles(dir: string, baseDir?: string): { path: string; relativePath: string }[] {
  const results: { path: string; relativePath: string }[] = []
  const base = baseDir || dir

  const entries = readdirSync(dir)

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      if (entry === 'node_modules' || entry.startsWith('.') || entry === 'dist' || entry === '.output') {
        continue
      }
      results.push(...findSourceFiles(fullPath, base))
    } else if (entry.endsWith('.vue') || entry.endsWith('.ts') || entry.endsWith('.js')) {
      results.push({
        path: fullPath,
        relativePath: relative(base, fullPath)
      })
    }
  }

  return results
}

/**
 * Search for a translation key usage in the codebase
 */
export function findKeyUsage(key: string, rootDir: string, sourceFiles?: { path: string; relativePath: string }[]): string[] {
  const files: string[] = []
  const filesToSearch = sourceFiles || findSourceFiles(rootDir)

  // Escape special regex characters in the key
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  // Patterns to search for
  const patterns = [
    new RegExp(`t\\(['"\`]${escapedKey}['"\`]`),      // t('key'), t("key"), t(`key`)
    new RegExp(`\\$t\\(['"\`]${escapedKey}['"\`]`),   // $t('key')
    new RegExp(`i18n\\.t\\(['"\`]${escapedKey}['"\`]`), // i18n.t('key')
  ]

  for (const { path, relativePath } of filesToSearch) {
    try {
      const content = readFileSync(path, 'utf-8')

      for (const pattern of patterns) {
        if (pattern.test(content)) {
          if (!files.includes(relativePath)) {
            files.push(relativePath)
          }
          break
        }
      }
    } catch {
      // Skip files that can't be read
    }
  }

  return files
}

/**
 * Check if a key is used in any Vue component's i18n block (component-based translation)
 */
export function isKeyInComponentI18n(
  key: string,
  vueFilesWithI18n: { path: string; relativePath: string; i18n: Record<string, Record<string, unknown>> }[]
): { found: boolean; files: string[] } {
  const files: string[] = []

  for (const { relativePath, i18n } of vueFilesWithI18n) {
    for (const localeData of Object.values(i18n)) {
      const keys = getKeys(localeData)
      if (keys.includes(key)) {
        if (!files.includes(relativePath)) {
          files.push(relativePath)
        }
      }
    }
  }

  return { found: files.length > 0, files }
}

/**
 * Analyze all translation key usage from a locale file
 */
export function analyzeKeyUsage(
  localeFilePath: string,
  rootDir: string,
  vueFilesWithI18n: { path: string; relativePath: string; i18n: Record<string, Record<string, unknown>> }[]
): KeyUsageReport {
  const { keys } = loadLocaleFile(localeFilePath)

  const globalKeys: KeyUsage[] = []
  const componentKeys: KeyUsage[] = []
  const unusedKeys: KeyUsage[] = []

  // Pre-load source files for efficiency
  const sourceFiles = findSourceFiles(rootDir)
  console.log(`\nScanning ${sourceFiles.length} source files for ${keys.length} translation keys...`)

  let processed = 0
  const total = keys.length

  for (const key of keys) {
    processed++
    if (processed % 50 === 0) {
      console.log(`Progress: ${processed}/${total} keys analyzed...`)
    }

    // First check if it's in component i18n blocks
    const componentUsage = isKeyInComponentI18n(key, vueFilesWithI18n)

    if (componentUsage.found) {
      componentKeys.push({
        key,
        usedIn: componentUsage.files,
        usageType: 'component'
      })
      continue
    }

    // Search for global usage
    const usedInFiles = findKeyUsage(key, rootDir, sourceFiles)

    if (usedInFiles.length > 0) {
      globalKeys.push({
        key,
        usedIn: usedInFiles,
        usageType: 'global'
      })
    } else {
      unusedKeys.push({
        key,
        usedIn: [],
        usageType: 'unused'
      })
    }
  }

  return {
    globalKeys,
    componentKeys,
    unusedKeys,
    summary: {
      total: keys.length,
      global: globalKeys.length,
      component: componentKeys.length,
      unused: unusedKeys.length
    }
  }
}

/**
 * Group keys by their top-level namespace
 */
export function groupKeysByNamespace(keys: KeyUsage[]): Record<string, KeyUsage[]> {
  const grouped: Record<string, KeyUsage[]> = {}

  for (const keyUsage of keys) {
    const namespace = keyUsage.key.split('.')[0]
    if (!grouped[namespace]) {
      grouped[namespace] = []
    }
    grouped[namespace].push(keyUsage)
  }

  return grouped
}

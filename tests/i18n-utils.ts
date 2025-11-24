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

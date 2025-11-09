/**
 * Marketing Parameters Tracking Utility
 *
 * Captures and persists marketing parameters (gclid, UTM params) from URL
 * for attribution tracking in PostHog.
 */

const STORAGE_KEY = 'marketing_params'

export interface MarketingParams {
  gclid?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

/**
 * Extract marketing parameters from URL search params
 */
export function extractMarketingParams(url: string): MarketingParams {
  try {
    const urlObj = new URL(url, window.location.origin)
    const params = urlObj.searchParams

    const marketingParams: MarketingParams = {}

    // Extract gclid (Google Click ID)
    const gclid = params.get('gclid')
    if (gclid) marketingParams.gclid = gclid

    // Extract UTM parameters
    const utmSource = params.get('utm_source')
    if (utmSource) marketingParams.utm_source = utmSource

    const utmMedium = params.get('utm_medium')
    if (utmMedium) marketingParams.utm_medium = utmMedium

    const utmCampaign = params.get('utm_campaign')
    if (utmCampaign) marketingParams.utm_campaign = utmCampaign

    const utmContent = params.get('utm_content')
    if (utmContent) marketingParams.utm_content = utmContent

    const utmTerm = params.get('utm_term')
    if (utmTerm) marketingParams.utm_term = utmTerm

    return marketingParams
  } catch (error) {
    console.error('[Marketing Params] Error extracting params:', error)
    return {}
  }
}

/**
 * Get stored marketing parameters from localStorage
 */
export function getStoredMarketingParams(): MarketingParams {
  if (typeof window === 'undefined') return {}

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch (error) {
    console.error('[Marketing Params] Error reading from localStorage:', error)
    return {}
  }
}

/**
 * Store marketing parameters in localStorage
 * New parameters overwrite old ones (newest takes precedence)
 */
export function storeMarketingParams(params: MarketingParams): void {
  if (typeof window === 'undefined') return

  try {
    // Get existing params
    const existing = getStoredMarketingParams()

    // Merge with new params (new params take precedence)
    const merged = { ...existing, ...params }

    // Only store if we have at least one parameter
    if (Object.keys(merged).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
      console.log('[Marketing Params] Stored:', merged)
    }
  } catch (error) {
    console.error('[Marketing Params] Error writing to localStorage:', error)
  }
}

/**
 * Capture marketing parameters from current URL and store them
 */
export function captureMarketingParams(url: string = window.location.href): void {
  const params = extractMarketingParams(url)

  // Only store if we found any parameters
  if (Object.keys(params).length > 0) {
    storeMarketingParams(params)
  }
}

/**
 * Clear stored marketing parameters
 */
export function clearMarketingParams(): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.removeItem(STORAGE_KEY)
    console.log('[Marketing Params] Cleared')
  } catch (error) {
    console.error('[Marketing Params] Error clearing localStorage:', error)
  }
}

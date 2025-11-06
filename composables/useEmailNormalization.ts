/**
 * Email normalization composable
 * Provides client-side email normalization functionality
 */

/**
 * Normalizes email addresses, specifically handling Gmail domains
 * For Gmail: removes dots from local part and handles + aliases
 * For other providers: returns email as-is (lowercased)
 *
 * @param email The email address to normalize
 * @returns {string} The normalized email address
 */
export function normalizeEmail(email: string): string {
  if (!email || typeof email !== 'string') {
    return email;
  }

  // Always lowercase the email first
  const lowercaseEmail = email.toLowerCase().trim();
  
  // Check if it's a Gmail domain (gmail.com or googlemail.com)
  if (lowercaseEmail.endsWith('@gmail.com') || lowercaseEmail.endsWith('@googlemail.com')) {
    const [local, domain] = lowercaseEmail.split('@');
    
    if (!local) {
      return lowercaseEmail; // Invalid email format, return as-is
    }
    
    // Remove dots and handle + aliases for Gmail
    const normalizedLocal = local.replace(/\./g, '').split('+')[0];
    
    // Always normalize to @gmail.com (googlemail.com is an alias)
    return normalizedLocal + '@gmail.com';
  }
  
  // For other email providers, just return the lowercased version
  return lowercaseEmail;
}

/**
 * Composable for email normalization functionality
 */
export const useEmailNormalization = () => {
  return {
    normalizeEmail
  };
};
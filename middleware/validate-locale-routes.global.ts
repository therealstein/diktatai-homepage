/**
 * Global middleware to validate locale routes and prevent invalid combinations
 * This catches routes that slip through the prerender ignore patterns
 */
export default defineNuxtRouteMiddleware((to) => {
  const path = to.path;
  const locales = ["de", "en", "nl", "es", "fr", "sv"];

  // Check for nested locale prefixes (e.g., /en/nl/something, /sv/de/something)
  // These are always invalid and should return 404
  const nestedLocalePattern = new RegExp(
    `^/(${locales.join("|")})/(${locales.join("|")})/`
  );
  if (nestedLocalePattern.test(path)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
      fatal: true,
    });
  }

  // Check for /fragen/ paths (German questions) accessed from non-German locales
  // Valid: /fragen/slug (de locale - no prefix)
  // Invalid: /en/fragen/slug, /nl/fragen/slug, etc.
  const nonDeLocales = ["en", "nl", "es", "fr", "sv"];
  const invalidFragenPattern = new RegExp(
    `^/(${nonDeLocales.join("|")})/fragen(/|$)`
  );
  if (invalidFragenPattern.test(path)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
      fatal: true,
    });
  }

  // Check for /questions/ paths accessed from non-English locales
  // Valid: /en/questions/slug
  // Invalid: /nl/questions/slug, /es/questions/slug, etc. (and /questions/ without /en/)
  const nonEnLocales = ["nl", "es", "fr", "sv"];
  const invalidQuestionsPattern = new RegExp(
    `^/(${nonEnLocales.join("|")})/questions(/|$)`
  );
  if (invalidQuestionsPattern.test(path)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
      fatal: true,
    });
  }

  // Also catch /questions/ without /en/ prefix (should be /fragen/ for German)
  if (/^\/questions(\/|$)/.test(path)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
      fatal: true,
    });
  }

  // Block /auth/ paths - these shouldn't exist on the homepage
  if (/\/auth\//.test(path)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
      fatal: true,
    });
  }
});

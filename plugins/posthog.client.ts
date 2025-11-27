import { defineNuxtPlugin, useRuntimeConfig, useRouter } from '#app';
import { nextTick } from 'vue';
import posthog from 'posthog-js';
import type { User } from '@supabase/supabase-js';

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  // Return empty functions in development mode or when IS_DEV is true
  if (import.meta.env.MODE === 'development' || runtimeConfig.public.isDev) {
    if (runtimeConfig.public.isDev) {
      console.log('PostHog disabled in development mode (IS_DEV=true)');
    }
    return {
      provide: {
        posthog: () => posthog,
        trackAuth: {
          identify: (user: User | null) => {},
          trackRegistration: (user: User) => {},
          trackLogin: (user: User) => {},
          trackAccountActivation: (user: User) => {},
          trackReturningUser: (user: User, daysSinceCreation: number) => {},
        },
        trackEvent: (
          eventName: string,
          properties: Record<string, any> = {}
        ) => {},
      },
    };
  }

  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
    api_host: runtimeConfig.public.posthogHost,
    ui_host: 'eu.posthog.com',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    capture_pageview: false, // we add manual pageview capturing below
    // Disable extra features to reduce bundle size and network requests
    disable_surveys: true,
    disable_session_recording: true,
    autocapture: false,
    capture_dead_clicks: false,
    capture_performance: false,
    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') posthog.debug();
    },
  });

  // Make sure that pageviews are captured with each route change
  const router = useRouter();
  router.beforeEach((to, from) => {
    nextTick(() => {
      // Skip pageleave tracking for /app/ routes (tracked server-side)
      // Matches both /app/ and /en/app/ (i18n prefixed routes)
      if (from.path.includes('/app/')) {
        return;
      }

      // Capture page leave event for the page being left
      posthog.capture('$pageleave', {
        from_url: from.fullPath,
        to_url: to.fullPath,
        leave_timestamp: new Date().toISOString(),
      });
    });
  });

  router.afterEach((to) => {
    nextTick(() => {
      // Skip pageview tracking for /app/ routes (tracked server-side)
      // Matches both /app/ and /en/app/ (i18n prefixed routes)
      if (to.path.includes('/app/')) {
        return;
      }

      posthog.capture('$pageview', {
        '$current_url': 'https://diktat.ai' + to.fullPath,
        "$pathname": to.fullPath
      });
    });
  });

  // Auth tracking functions
  const identifyUser = (user: User | null) => {
    if (!user) return;

    posthog.identify(user.id, {
      email: user.email,
      created_at: user.created_at,
      last_sign_in_at: user.last_sign_in_at,
    });
  };

  const trackUserRegistration = (user: User) => {
    posthog.capture('user_registered', {
      user_id: user.id,
      email: user.email,
      auth_provider: user.app_metadata?.provider || 'email',
      registration_date: new Date().toISOString(),
    });
  };

  const trackAccountActivation = (user: User) => {
    posthog.capture('account_activation', {
      user_id: user.id,
      email: user.email,
      activation_date: new Date().toISOString(),
    });
  };

  const trackUserLogin = (user: User) => {
    posthog.capture('user_logged_in', {
      user_id: user.id,
      email: user.email,
      auth_provider: user.app_metadata?.provider || 'email',
      login_date: new Date().toISOString(),
    });
  };

  const trackReturningUser = (user: User, daysSinceCreation: number) => {
    posthog.capture('returning_user_login', {
      user_id: user.id,
      email: user.email,
      days_since_account_creation: daysSinceCreation,
      account_age_days: daysSinceCreation,
      current_login_date: new Date().toISOString(),
      current_login_timestamp: user.last_sign_in_at,
      account_created_date: user.created_at,
      auth_provider: user.app_metadata?.provider || 'email',
      // Note: We cannot track actual "days since last login" because Supabase
      // doesn't store previous login timestamps, only current login
      tracking_method: 'account_age_based',
    });
  };

  const trackCustomEvent = (
    eventName: string,
    properties: Record<string, any> = {}
  ) => {
    posthog.capture(eventName, properties);
  };

  return {
    provide: {
      posthog: () => posthogClient,
      trackAuth: {
        identify: identifyUser,
        trackRegistration: trackUserRegistration,
        trackLogin: trackUserLogin,
        trackAccountActivation: trackAccountActivation,
        trackReturningUser: trackReturningUser,
      },
      trackEvent: trackCustomEvent,
    },
  };
});

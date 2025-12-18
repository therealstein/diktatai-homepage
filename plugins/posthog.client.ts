import { defineNuxtPlugin, useRuntimeConfig, useRouter } from '#app';
import { nextTick } from 'vue';
import type { User } from '@supabase/supabase-js';

// Lazy load PostHog to reduce initial bundle size
let posthogInstance: any = null;
let initPromise: Promise<any> | null = null;

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  // Return empty functions in development mode or when IS_DEV is true
  if (import.meta.env.MODE === 'development' || runtimeConfig.public.isDev) {
    if (runtimeConfig.public.isDev) {
      console.log('PostHog disabled in development mode (IS_DEV=true)');
    }
    return {
      provide: {
        posthog: () => null,
        trackAuth: {
          identify: (_user: User | null) => {},
          trackRegistration: (_user: User) => {},
          trackLogin: (_user: User) => {},
          trackAccountActivation: (_user: User) => {},
          trackReturningUser: (_user: User, _daysSinceCreation: number) => {},
        },
        trackEvent: (
          _eventName: string,
          _properties: Record<string, any> = {}
        ) => {},
      },
    };
  }

  // Initialize PostHog lazily
  const initPostHog = async (): Promise<any> => {
    if (posthogInstance) return posthogInstance;
    if (initPromise) return initPromise;

    initPromise = import('posthog-js').then((module) => {
      const posthog = module.default;
      posthogInstance = posthog.init(runtimeConfig.public.posthogPublicKey, {
        api_host: runtimeConfig.public.posthogHost,
        ui_host: 'eu.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false,
        // Disable extra features to reduce bundle size and network requests
        disable_surveys: true,
        disable_session_recording: true,
        autocapture: false,
        capture_dead_clicks: false,
        capture_performance: false,
        loaded: (ph: any) => {
          if (import.meta.env.MODE === 'development') ph.debug();
        },
      });
      return posthogInstance;
    });

    return initPromise;
  };

  // Helper to safely call PostHog methods
  const safeCapture = async (event: string, properties?: Record<string, any>) => {
    const ph = await initPostHog();
    if (ph) {
      ph.capture(event, properties);
    }
  };

  const safeIdentify = async (distinctId: string, properties?: Record<string, any>) => {
    const ph = await initPostHog();
    if (ph) {
      ph.identify(distinctId, properties);
    }
  };

  // Defer PostHog initialization to not block LCP
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => initPostHog(), { timeout: 3000 });
    } else {
      setTimeout(initPostHog, 3000);
    }
  }

  // Make sure that pageviews are captured with each route change
  const router = useRouter();
  router.beforeEach((to, from) => {
    nextTick(() => {
      // Skip pageleave tracking for /app/ routes (tracked server-side)
      if (from.path.includes('/app/')) {
        return;
      }

      safeCapture('$pageleave', {
        from_url: from.fullPath,
        to_url: to.fullPath,
        leave_timestamp: new Date().toISOString(),
      });
    });
  });

  router.afterEach((to) => {
    nextTick(() => {
      // Skip pageview tracking for /app/ routes (tracked server-side)
      if (to.path.includes('/app/')) {
        return;
      }

      safeCapture('$pageview', {
        '$current_url': 'https://diktat.ai' + to.fullPath,
        '$pathname': to.fullPath,
      });
    });
  });

  // Auth tracking functions
  const identifyUser = (user: User | null) => {
    if (!user) return;
    safeIdentify(user.id, {
      email: user.email,
      created_at: user.created_at,
      last_sign_in_at: user.last_sign_in_at,
    });
  };

  const trackUserRegistration = (user: User) => {
    safeCapture('user_registered', {
      user_id: user.id,
      email: user.email,
      auth_provider: user.app_metadata?.provider || 'email',
      registration_date: new Date().toISOString(),
    });
  };

  const trackAccountActivation = (user: User) => {
    safeCapture('account_activation', {
      user_id: user.id,
      email: user.email,
      activation_date: new Date().toISOString(),
    });
  };

  const trackUserLogin = (user: User) => {
    safeCapture('user_logged_in', {
      user_id: user.id,
      email: user.email,
      auth_provider: user.app_metadata?.provider || 'email',
      login_date: new Date().toISOString(),
    });
  };

  const trackReturningUser = (user: User, daysSinceCreation: number) => {
    safeCapture('returning_user_login', {
      user_id: user.id,
      email: user.email,
      days_since_account_creation: daysSinceCreation,
      account_age_days: daysSinceCreation,
      current_login_date: new Date().toISOString(),
      current_login_timestamp: user.last_sign_in_at,
      account_created_date: user.created_at,
      auth_provider: user.app_metadata?.provider || 'email',
      tracking_method: 'account_age_based',
    });
  };

  const trackCustomEvent = (
    eventName: string,
    properties: Record<string, any> = {}
  ) => {
    safeCapture(eventName, properties);
  };

  return {
    provide: {
      posthog: () => posthogInstance,
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

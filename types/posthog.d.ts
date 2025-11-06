import type { User } from '@supabase/supabase-js';
import type { PostHog } from 'posthog-js';

// Extend the Nuxt app interface to add our plugin types
declare module '#app' {
  interface NuxtApp {
    $posthog: () => PostHog;
    $trackAuth: {
      identify: (user: User | null) => void;
      trackRegistration: (user: User) => void;
      trackLogin: (user: User) => void;
      trackAccountActivation: (user: User) => void;
      trackReturningUser: (user: User, daysSinceCreation: number) => void;
    };
    $trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  }
}

// Declare the module to ensure TypeScript understands this file is a module
export {};

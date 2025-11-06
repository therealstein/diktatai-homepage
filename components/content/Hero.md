# HeroSection

A flexible and feature-rich hero section component that supports various styles, backgrounds, and call-to-action options.

## Basic Usage

```vue
<template>
  <Hero
    title="Welcome to Our Platform"
    subtitle="The best solution for your needs"
    description="Discover how our platform can help you achieve your goals with our comprehensive suite of features."
    :features="[
      'Easy to use interface',
      '24/7 customer support',
      'Secure and reliable',
    ]"
    :cta="{ to: '/get-started', text: 'Get Started' }"
    :secondaryCta="{ to: '/learn-more', text: 'Learn More' }"
    variant="glass"
    size="large"
    :background="{
      type: 'gradient',
      value: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    }"
    pattern="dots"
  />
</template>
```

## Features

- Multiple size options (default, large, full)
- Glass or solid background variants
- Customizable background (gradient, image, or color)
- Optional background patterns (dots, grid, waves)
- Optional overlay with customizable color and opacity
- Support for primary and secondary CTAs
- Feature list with icons
- Additional info section
- Responsive design
- TypeScript support

## Props

| Prop           | Type                           | Required | Default   | Description                     |
| -------------- | ------------------------------ | -------- | --------- | ------------------------------- |
| title          | string                         | Yes      | -         | Main heading text               |
| subtitle       | string                         | No       | -         | Subtitle text                   |
| description    | string                         | No       | -         | Main description text           |
| features       | string[]                       | No       | -         | Array of feature items          |
| cta            | Cta                            | No       | -         | Primary call-to-action button   |
| secondaryCta   | Cta                            | No       | -         | Secondary call-to-action button |
| additionalInfo | string                         | No       | -         | Additional information text     |
| variant        | 'glass' \| 'solid'             | No       | 'glass'   | Visual style variant            |
| size           | 'default' \| 'large' \| 'full' | No       | 'default' | Size variant                    |
| background     | Background                     | No       | -         | Background configuration        |
| overlay        | Overlay                        | No       | -         | Overlay configuration           |
| pattern        | 'dots' \| 'grid' \| 'waves'    | No       | -         | Background pattern              |

### Types

```typescript
interface Cta {
  to: string;
  text: string;
}

interface Background {
  type: 'gradient' | 'image' | 'color';
  value: string;
}

interface Overlay {
  color: string;
  opacity: number;
}
```

## Examples

### Glass Effect with Gradient Background

```vue
<Hero
  title="Transform Your Workflow"
  subtitle="Powerful tools for modern teams"
  description="Streamline your processes and boost productivity with our comprehensive suite of tools."
  :features="[
    'Real-time collaboration',
    'Advanced analytics',
    'Custom workflows',
  ]"
  :cta="{ to: '/signup', text: 'Start Free Trial' }"
  variant="glass"
  :background="{
    type: 'gradient',
    value: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  }"
  pattern="dots"
/>
```

### Solid Background with Image

```vue
<Hero
  title="Enterprise Solutions"
  subtitle="Built for scale"
  description="Trusted by Fortune 500 companies worldwide."
  :features="['Enterprise-grade security', '99.9% uptime', '24/7 support']"
  :cta="{ to: '/contact', text: 'Contact Sales' }"
  variant="solid"
  :background="{ type: 'image', value: '/images/enterprise-bg.jpg' }"
  :overlay="{ color: '#000', opacity: 0.5 }"
/>
```

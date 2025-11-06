# CTA Component

A flexible call-to-action component that supports multiple styles and configurations.

## Basic Usage

```vue
<Cta
  variant="gradient"
  title="Start Your Free Trial"
  description="Join thousands of satisfied users today"
  :primaryLink="{
    to: 'auth-register',
    text: 'Get Started',
    variant: 'filled',
  }"
  :secondaryLink="{
    to: 'pricing',
    text: 'View Pricing',
    variant: 'outline',
  }"
  :footerLinks="[
    { to: 'pricing', text: 'Pricing' },
    { to: 'security', text: 'Security' },
  ]"
/>
```

## Image Background Variant

```vue
<Cta
  variant="image"
  backgroundImage="/cta-web.webp"
  title="Transform Your Workflow"
  description="Experience the power of AI-driven transcription"
  :primaryLink="{
    to: 'auth-register',
    text: 'Start Free Trial',
    variant: 'filled',
  }"
  :secondaryLink="{
    to: 'pricing',
    text: 'View Pricing',
    variant: 'transparent',
  }"
/>
```

## Props

- `variant` (optional): 'gradient' | 'image' - Style variant
- `backgroundImage` (optional): URL for background image (required for 'image' variant)
- `title` (required): Main heading text
- `description` (required): Description text
- `primaryLink` (required): Main call-to-action link
  - `to`: Route path
  - `text`: Button text
  - `variant`: 'filled' | 'outline' | 'transparent'
- `secondaryLink` (optional): Secondary call-to-action link
- `footerLinks` (optional): Array of footer links
  - `to`: Route path
  - `text`: Link text

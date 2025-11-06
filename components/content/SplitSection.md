# SplitSection Component

A flexible component that displays an image and text content side by side.

## Basic Usage

```vue
<SplitSection
  title="Transform Your Workflow"
  subtitle="Experience the power of AI-driven transcription"
  description="Our advanced AI technology helps you convert speech to text with unprecedented accuracy and speed."
  image="/path/to/image.jpg"
  imageAlt="AI Transcription Interface"
/>
```

## With Features and CTA

```vue
<SplitSection
  title="Why Choose Us"
  subtitle="The smart choice for modern professionals"
  description="Our platform combines cutting-edge technology with user-friendly design."
  image="/path/to/image.jpg"
  imageAlt="Platform Features"
  :features="[
    'Advanced AI transcription',
    'Real-time processing',
    'Multi-language support',
    'Secure and private',
  ]"
  :cta="{
    to: 'auth-register',
    text: 'Get Started',
  }"
/>
```

## Image on Right Side

```vue
<SplitSection
  title="Powerful Features"
  description="Discover what makes our platform unique"
  image="/path/to/image.jpg"
  imageAlt="Platform Features"
  imageRight
/>
```

## Props

- `title` (required): Main heading
- `subtitle` (optional): Subheading text
- `description` (required): Main description text
- `image` (required): Image URL
- `imageAlt` (required): Image alt text
- `imageRight` (optional): Whether to show image on the right side
- `imageCover` (optional): Whether to use object-cover for the image
- `features` (optional): Array of feature points with checkmark icons
- `cta` (optional): Call-to-action button configuration
  - `to`: Route path
  - `text`: Button text

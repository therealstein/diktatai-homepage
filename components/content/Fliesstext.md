# Fliesstext

A flexible component for displaying flowing text content with proper typography and formatting.

## Basic Usage

```vue
<template>
  <Fliesstext
    title="About Our Company"
    subtitle="Learn more about our mission and values"
    maxWidth="prose"
    size="base"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <h3>Our Mission</h3>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident.
    </p>
    <ul>
      <li>Quality first</li>
      <li>Customer satisfaction</li>
      <li>Innovation</li>
    </ul>
  </Fliesstext>
</template>
```

## Features

- Responsive typography with proper spacing
- Optional title and subtitle
- Configurable text size and max-width
- Support for two-column layout
- Rich text formatting (headings, lists, blockquotes, code)
- Proper styling for all HTML elements
- TypeScript support

## Props

| Prop           | Type                           | Required | Default | Description                   |
| -------------- | ------------------------------ | -------- | ------- | ----------------------------- |
| title          | string                         | No       | -       | Main heading text             |
| subtitle       | string                         | No       | -       | Subtitle text                 |
| additionalInfo | string                         | No       | -       | Additional information text   |
| size           | 'base' \| 'lg' \| 'xl'         | No       | 'base'  | Text size variant             |
| maxWidth       | 'prose' \| 'medium' \| 'large' | No       | 'prose' | Maximum width of the content  |
| columns        | 1 \| 2                         | No       | 1       | Number of columns for content |
| centered       | boolean                        | No       | true    | Whether to center the content |

## Styled Elements

The component automatically styles the following HTML elements:

- Paragraphs (`<p>`)
- Headings (`<h3>`, `<h4>`)
- Lists (`<ul>`, `<ol>`)
- Blockquotes (`<blockquote>`)
- Links (`<a>`)
- Code blocks (`<code>`, `<pre>`)

## Examples

### Two-Column Layout

```vue
<Fliesstext
  title="Our Services"
  subtitle="Comprehensive solutions for your needs"
  columns="2"
  maxWidth="large"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </p>
  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </p>
</Fliesstext>
```

### Large Text with Code Example

```vue
<Fliesstext title="Getting Started" size="lg" maxWidth="medium">
  <p>
    Follow these simple steps to get started with our platform:
  </p>
  <pre><code>npm install our-package
npm run setup
npm start</code></pre>
  <p>
    That's it! You're ready to go.
  </p>
</Fliesstext>
```

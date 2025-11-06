# CardSection Component

A flexible grid layout component for displaying cards with icons and descriptions.

## Basic Usage

```vue
<CardSection
  title="Examples"
  description="Here are some examples of how to use our service"
  :cards="[
    {
      title: 'Document Processing',
      description: 'Process your documents efficiently',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 8l-7 7-3-3m4-3v8M19 16v4"/>'
    },
    {
      title: 'File Management',
      description: 'Manage your files with ease',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>'
    },
    {
      title: 'Full Width Card',
      description: 'This card spans the full width',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>',
      spanFull: true
    }
  ]"
/>
```

## Layout Options

The component supports three layout options:

1. Default (2 columns):

```vue
<CardSection layout="default" title="Two Column Layout" :cards="[...]" />
```

2. Single Column:

```vue
<CardSection layout="single" title="Single Column Layout" :cards="[...]" />
```

3. Triple Column:

```vue
<CardSection layout="triple" title="Three Column Layout" :cards="[...]" />
```

## Props

- `title` (required): Section heading
- `description` (optional): Section description
- `cards` (required): Array of card objects, each with:
  - `title`: Card heading
  - `description`: Card content
  - `icon` (optional): SVG path for the icon
  - `spanFull` (optional): Whether the card should span full width
- `layout` (optional): 'default' | 'single' | 'triple' - Grid layout type

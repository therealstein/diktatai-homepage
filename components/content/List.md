# List Component

A versatile component that supports both single and multi-section lists.

## Single List Version

```vue
<List
  heading="Your Main Heading"
  subheading="Optional subheading text"
  :listItems="['First list item', 'Second list item', 'Third list item']"
/>
```

## Multi-Section Version

```vue
<List
  heading="Main Heading"
  :sections="[
    {
      title: 'Section 1 Title',
      items: ['Section 1 item 1', 'Section 1 item 2'],
    },
    {
      title: 'Section 2 Title',
      items: ['Section 2 item 1', 'Section 2 item 2'],
    },
  ]"
/>
```

## Props

### Single List Version

- `heading` (required): Main title
- `subheading` (optional): Subtitle text
- `listItems` (required): Array of strings

### Multi-Section Version

- `heading` (required): Main title
- `subheading` (optional): Subtitle text
- `sections` (required): Array of sections, each with:
  - `title` (optional): Section heading
  - `items` (required): Array of strings

# FaqList Component

A collapsible FAQ list component with smooth animations.

```vue
<FaqList
  heading="Häufig gestellte Fragen"
  subheading="Antworten auf die wichtigsten Fragen"
  :items="[
    {
      question: 'Was genau macht Diktat AI für Juristen?',
      answer: 'Diktat AI wandelt Ihre gesprochenen Worte.',
    },
    {
      question: 'Ist Diktat AI für meine Kanzlei geeignet?',
      answer: 'Absolut. Diktat AI ist ideal.',
    },
  ]"
/>
```

## Props

- `heading` (required): Main title
- `subheading` (optional): Subtitle text
- `items` (required): Array of FAQ items, each with:
  - `question`: The question text
  - `answer`: The answer text

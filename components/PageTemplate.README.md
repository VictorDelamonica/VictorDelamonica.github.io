# Page Template Component

A reusable Vue component for creating consistent page layouts with customizable titles, subtitles, content, and CTAs.

## Component Location
`/components/PageTemplate.vue`

## Usage

### Basic Example
```vue
<template>
  <PageTemplate
    title="Your Page Title"
    subtitle="Your subtitle or tagline"
  >
    <p>Your content goes here with <strong>bold text</strong> for emphasis.</p>
    <p>Multiple paragraphs are automatically styled.</p>
  </PageTemplate>
</template>

<script setup>
useHead({
  title: 'Your Page - Site Name',
  meta: [{ name: 'description', content: 'Page description' }]
})

definePageMeta({ layout: 'default' })
</script>
```

## Props

### `title` (required)
- Type: `String`
- The main page title

### `titleStyle`
- Type: `String`
- Default: `'handwritten'`
- Options:
  - `'handwritten'` - Uses Lazydog font with shadow effect (like IncluSens hero)
  - `'bold'` - Uses Garet Heavy font with shadow (like exposition page)
  - `'custom'` - Basic styling, customize with your own CSS

### `subtitle`
- Type: `String`
- Default: `''` (optional)
- Subtitle or tagline text

### `subtitleStyle`
- Type: `String`
- Default: `'normal'`
- Options:
  - `'normal'` - Regular Garet font, gray color
  - `'handwritten'` - Lazydog cursive font with shadow
  - `'custom'` - Basic styling for custom CSS

### `showCTA`
- Type: `Boolean`
- Default: `false`
- Whether to show a call-to-action button

### `ctaText`
- Type: `String`
- Default: `'En apprendre plus'`
- Text displayed on the CTA button

### `ctaLink`
- Type: `String`
- Default: `'#'`
- URL for the CTA button

### `bgImage` (optional)
- Type: `String`
- Default: `''` (no background image)
- URL path to a background image (e.g., `/my-background.jpg`)
- When set, the image will be displayed as a fixed background

### `bgImageOpacity`
- Type: `Number`
- Default: `0.3`
- Controls the visibility of the background image (0 = invisible, 1 = fully visible)
- A semi-transparent overlay is applied to ensure content readability

### `bgImagePosition`
- Type: `String`
- Default: `'center'`
- CSS background-position value (e.g., `'center'`, `'top'`, `'bottom'`, `'left center'`)

### `bgImageSize`
- Type: `String`
- Default: `'cover'`
- CSS background-size value (e.g., `'cover'`, `'contain'`, `'100% auto'`)

## Content Slot

The component uses a default slot for page content. You can add:
- Paragraphs with `<p>` tags
- Bold text with `<strong>` tags
- Any other HTML elements
- Custom components

Content is automatically styled with:
- Maximum width constraint
- Proper spacing between paragraphs
- Responsive typography
- Dark mode support

## Examples

### Example 1: Handwritten Title Style (like Hero page)
See: `/pages/_example-handwritten.vue`

```vue
<PageTemplate
  title="Inclusens"
  title-style="handwritten"
  subtitle="12 millions de personnes en France..."
  :show-c-t-a="true"
  cta-text="En apprendre plus"
>
  <p>Content with <strong>bold emphasis</strong>...</p>
</PageTemplate>
```

### Example 2: Bold Title Style (like Exposition page)
See: `/pages/_example-bold.vue`

```vue
<PageTemplate
  title="NOTRE EXPOSITION"
  title-style="bold"
  subtitle="Le handicap invisible en entreprise"
  subtitle-style="handwritten"
>
  <p>Your content...</p>
</PageTemplate>
```

### Example 3: Simple Page (no subtitle, no CTA)
```vue
<PageTemplate
  title="About Us"
  title-style="handwritten"
>
  <p>Simple content page with just a title and text.</p>
  <p>More paragraphs as needed.</p>
</PageTemplate>
```

### Example 4: With Background Image
```vue
<PageTemplate
  title="Beautiful Page"
  title-style="handwritten"
  subtitle="With a stunning background"
  bg-image="/my-background.jpg"
  :bg-image-opacity="0.5"
  bg-image-position="center"
  bg-image-size="cover"
>
  <p>Content is displayed over the background image with an overlay for readability.</p>
</PageTemplate>
```

### Example 5: Custom Styling
```vue
<PageTemplate
  title="Custom Page"
  title-style="custom"
  subtitle-style="custom"
>
  <p>Use your own custom CSS classes or styles.</p>
</PageTemplate>

<style scoped>
/* Add your custom title/subtitle styles */
</style>
```

## Styling Features

### Automatic Features
- ✅ Dark mode support (automatically toggles with your color mode)
- ✅ Responsive typography (scales on mobile/tablet/desktop)
- ✅ Proper spacing and margins
- ✅ Font loading (Lazydog and Garet fonts)
- ✅ Shadow effects matching your Canva designs
- ✅ Smooth transitions

### Typography
- Body text: Garet font family
- Bold text: Automatically darker in light mode, lighter in dark mode
- Line height: Optimized for readability (1.75)
- Letter spacing: Subtle tracking for better appearance

## Creating a New Page

1. Create a new file in `/pages/` (e.g., `my-page.vue`)
2. Copy this starter template:

```vue
<template>
  <PageTemplate
    title="Your Title"
    title-style="handwritten"
    subtitle="Your subtitle (optional)"
    :show-c-t-a="false"
  >
    <!-- Your content here -->
    <p>
      First paragraph with <strong>important text</strong> highlighted.
    </p>

    <p>
      Second paragraph with more content.
    </p>

    <!-- Add more paragraphs as needed -->
  </PageTemplate>
</template>

<script setup>
useHead({
  title: 'Your Page Title - IncluSens',
  meta: [
    {
      name: 'description',
      content: 'Your page description for SEO'
    }
  ]
})

definePageMeta({ layout: 'default' })
</script>
```

3. Customize the props and content
4. Save and view at `/your-page-name`

## Tips

- Use `<strong>` tags for emphasis on important text
- Keep paragraphs focused and readable
- Choose title style based on page importance:
  - `handwritten` for friendly, approachable pages
  - `bold` for formal, important announcements
- Add custom divs within the slot for special formatting
- Test in both light and dark modes

## Files Reference

- Component: `/components/PageTemplate.vue`
- Example 1 (Handwritten): `/pages/_example-handwritten.vue`
- Example 2 (Bold): `/pages/_example-bold.vue`
- This documentation: `/components/PageTemplate.README.md`


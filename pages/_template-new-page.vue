<template>
  <PageTemplate
    title="Your Page Title"
    title-style="handwritten"
    subtitle="Your subtitle or tagline here (optional)"
    subtitle-style="normal"
    :show-c-t-a="false"
  >
    <!-- Main content paragraphs -->
    <p>
      Your first paragraph with <strong>important text highlighted</strong>
      and regular text explaining your content.
    </p>

    <p>
      Second paragraph with more <strong>key information</strong>
      and additional details about your topic.
    </p>

    <p>
      Third paragraph continuing your message with
      <strong>emphasis on critical points</strong>.
    </p>

    <!-- Add more paragraphs as needed -->

    <!-- Optional: Custom sections with special styling -->
    <!-- <div class="mt-16 text-center text-gray-600 dark:text-gray-400">
      <p>Special note or contact information...</p>
    </div> -->
  </PageTemplate>
</template>

<script setup>
// Page metadata for SEO
useHead({
  title: 'Your Page Title - IncluSens',
  meta: [
    {
      name: 'description',
      content: 'Brief description of your page content for search engines'
    }
  ]
})

// Use the default layout
definePageMeta({ layout: 'default' })
</script>

<!--
QUICK REFERENCE:

Title Style Options:
- "handwritten" = Lazydog font with shadow (friendly, casual)
- "bold" = Garet Heavy with shadow (formal, important)
- "custom" = Basic styling for your own CSS

Subtitle Style Options:
- "normal" = Regular Garet font, gray color
- "handwritten" = Lazydog cursive with shadow
- "custom" = Basic styling for your own CSS

CTA Button:
- Set :show-c-t-a="true" to show button
- Set cta-text="Button Text Here"
- Set cta-link="/your-link" or "#"

Content Tips:
- Use <strong> tags for emphasis
- Keep paragraphs focused
- Add custom divs for special sections
- Test in both light and dark modes
-->


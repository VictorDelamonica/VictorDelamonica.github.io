<template>
  <PageTemplate
      subtitle="Le bureau"
      subtitle-style="handwritten"
  >
    <MDC :value="content" tag="div" />
  </PageTemplate>
</template>

<script setup>
const content = ``
// Use the default layout
definePageMeta({layout: 'default'})
</script>

<style scoped>
/* Markdown content styling */
:deep(p) {
  margin-bottom: 1.5rem;
  line-height: 2rem;
  font-size: 18px;
  color: inherit;
}

:deep(strong) {
  font-weight: 700;
  color: inherit;
}

:deep(p:last-child) {
  margin-bottom: 0;
}
</style>

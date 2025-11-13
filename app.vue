<template>
  <div class="bg-white dark:bg-gray-800 min-h-screen">
    <NuxtLoadingIndicator color="#F4A694" :height="3" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Dynamic favicon based on color mode
useFavicon()

// Set up SEO defaults
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - IncluSens` : 'IncluSens'
  },
})
</script>

<style>
/* Prevent horizontal overflow globally */
html,
body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}

/* Global text wrapping */
* {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Global smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus visible for accessibility */
*:focus-visible {
  outline: 2px solid #F4A694;
  outline-offset: 2px;
}

/* Mobile-specific improvements */
@media (max-width: 640px) {
  body {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    word-break: break-word;
    hyphens: auto;
  }
}
</style>


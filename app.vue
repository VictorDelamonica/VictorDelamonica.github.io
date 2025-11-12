<template>
  <div class="bg-white dark:bg-gray-800 min-h-screen">
    <NuxtLayout>
      <NuxtLoadingIndicator color="#F4A694" :height="3" />
      <Transition name="page" mode="out-in">
        <NuxtPage />
      </Transition>
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
</style>


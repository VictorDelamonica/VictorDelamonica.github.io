<template>
  <div class="min-h-screen bg-[#F7EDEA] dark:bg-[#626c71] text-gray-900 dark:text-gray-100 font-sans flex flex-col">
    <!-- Sticky Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#eee3da] dark:bg-[#626c71] shadow-md border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-6 gap-2">
          <!-- Back Button -->
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#F4A694] dark:hover:text-[#F4A694] transition-colors duration-200 group flex-shrink-0"
            aria-label="Retour vers la page d'accueil"
          >
            <svg
              class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="font-medium hidden md:inline">Retour</span>
          </NuxtLink>

          <!-- Logo/Title -->
          <div class="flex-1 text-center">
            <h1 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
              Support
            </h1>
          </div>

          <!-- Theme Toggle Button -->
          <button
            type="button"
            @click="toggleColorMode"
            class="inline-flex items-center gap-2 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-[#eee3da] dark:bg-[#626c71] hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F4A694] focus:ring-offset-2 flex-shrink-0"
            :aria-label="colorMode.value === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'"
          >
            <Transition name="icon-fade" mode="out-in">
              <component
                :is="colorMode.value === 'light' ? SunIcon : MoonIcon"
                :key="colorMode.value"
                class="w-5 h-5 text-yellow-500 dark:text-white transition-transform duration-500"
              />
            </Transition>
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content - Centered -->
    <main class="flex-1 flex items-center justify-center pt-14">
      <div class="text-center px-4">
        <div class="inline-block">
          <!-- Animated spinner/icon -->
          <div class="mb-8 relative">
            <div class="w-24 h-24 mx-auto border-4 border-[#F4A694] border-t-transparent rounded-full animate-spin"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-12 h-12 text-[#F4A694]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>

          <!-- Work in Progress Text -->
          <h2 class="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Work in Progress
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Cette page est en cours de développement
          </p>

          <!-- Optional: Back to home button -->
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 bg-[#F4A694] text-white font-medium rounded-full hover:bg-[#e89584] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const colorMode = useColorMode()

/**
 * Toggle between light and dark color modes
 */
const toggleColorMode = (): void => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// SEO metadata
useHead({
  title: 'Support - IncluSens',
  meta: [
    {
      name: 'description',
      content: 'Page de support IncluSens - En cours de développement',
    },
    {
      property: 'og:title',
      content: 'Support - IncluSens',
    },
  ],
})

definePageMeta({
  layout: 'default',
})
</script>

<style scoped>
/* Icon fade transition */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

/* Spinner animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>


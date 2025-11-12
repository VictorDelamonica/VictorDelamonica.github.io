<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-[9999] flex items-center justify-center transition-opacity duration-300"
    :class="{ 'opacity-0 pointer-events-none': !isLoading }"
  >
    <div class="text-center">
      <!-- Animated Logo or Spinner -->
      <div class="relative w-24 h-24 mx-auto mb-4">
        <div class="absolute inset-0 border-4 border-coral/30 rounded-full"></div>
        <div
          class="absolute inset-0 border-4 border-coral border-t-transparent rounded-full animate-spin"
        ></div>
      </div>

      <!-- Loading Text -->
      <p class="text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
        Chargement...
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface LoadingProps {
  isLoading?: boolean
}

withDefaults(defineProps<LoadingProps>(), {
  isLoading: false,
})
</script>

<style scoped>
/* Additional animations can be added here */
</style>


<template>
  <div class="relative">
    <!-- Light/Dark Toggle -->
    <button
      type="button"
      @click="toggleColorMode"
      class="fixed top-4 right-4 z-50 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
      :aria-label="colorMode.value === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'"
    >
      <Transition name="icon-fade" mode="out-in">
        <component
          :is="colorMode.value === 'light' ? SunIcon : MoonIcon"
          :key="colorMode.value"
          class="w-5 h-5 text-yellow-500 dark:text-white transition-transform duration-500 transform rotate-0 scale-100"
        />
      </Transition>
    </button>

    <!-- Loading Spinner -->
    <Transition name="fade">
      <div
        v-if="isLoading"
        class="fixed top-4 right-16 z-50 w-6 h-6 border-4 border-coral border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="Chargement en cours"
      />
    </Transition>

    <!-- Main Content -->
    <Transition name="fade" mode="out-in">
      <slot />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const isLoading = ref(false)
const router = useRouter()
const colorMode = useColorMode()

/**
 * Toggle between light and dark color modes
 */
const toggleColorMode = (): void => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

/**
 * Set up route change loading indicators
 */
onMounted(() => {
  router.beforeEach(() => {
    isLoading.value = true
  })

  router.afterEach(() => {
    // Small delay for smoother transition
    setTimeout(() => {
      isLoading.value = false
    }, 300)
  })
})
</script>

<style scoped>
.icon-fade-enter-active, .icon-fade-leave-active {
  transition: opacity 0.3s, transform 0.4s;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@keyframes loading-bar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-loading-bar {
  animation: loading-bar 1s linear infinite;
}

</style>
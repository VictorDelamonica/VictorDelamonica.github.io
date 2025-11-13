<template>
  <div class="relative min-h-screen">

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
    <slot />
  </div>
</template>

<script setup lang="ts">

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
.icon-fade-enter-active,
.icon-fade-leave-active {
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
</style>


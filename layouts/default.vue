<template>
  <div>
    <!-- Light/Dark Toggle -->
    <button
        @click="toggleColorMode"
        class="fixed top-4 right-4 z-50 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-all duration-300"
        aria-label="Toggle dark mode"
    >
      <transition name="icon-fade" mode="out-in">
        <component :is="colorMode.value === 'light' ? SunIcon : MoonIcon" :key="colorMode.value"
                   class="w-5 h-5 text-yellow-500 dark:text-white transition-transform duration-500 transform rotate-0 scale-100"/>
      </transition>
    </button>

    <div
        v-if="isLoading"
        class="fixed top-4 right-4 z-50 w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
    ></div>
    <Transition name="fade">
      <slot/>
    </Transition>
  </div>
</template>

<script setup>
import {SunIcon, MoonIcon} from '@heroicons/vue/24/solid'

import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const isLoading = ref(false)
const router = useRouter()

onMounted(() => {
  router.beforeEach(() => {
    isLoading.value = true
  })
  router.afterEach(() => {
    // Add a small delay for a smoother transition
    setTimeout(() => {
      isLoading.value = false
    }, 300)
  })
})

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
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
<template>
  <main
    class="min-h-screen bg-[#F7EDEA] dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-sans transition-colors duration-300 overflow-x-hidden relative"
    :style="mainBackgroundStyle"
  >
    <!-- Background Image Overlay (optional) -->
    <div v-if="bgImage" class="absolute inset-0 bg-[#F7EDEA] dark:bg-gray-900" :style="{ opacity: 1 - (bgImageOpacity || 0.3) }"></div>

    <section class="mx-auto w-full max-w-5xl px-4 sm:px-6 pt-10 pb-20 md:pt-14 relative z-10">

      <!-- Back Button (optional) -->
      <nav v-if="showBackButton" class="mb-6" aria-label="Breadcrumb">
        <NuxtLink
          :to="backLink"
          class="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
          :aria-label="`${backText} vers la page précédente`"
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
          <span class="font-medium">{{ backText }}</span>
        </NuxtLink>
      </nav>

      <!-- Title -->
      <h1 :class="titleClass" class="text-center mb-2 select-none break-words px-2">
        {{ title }}
      </h1>

      <!-- Subtitle (optional) -->
      <h2 v-if="subtitle" :class="subtitleClass" class="mx-auto max-w-2xl text-center mb-10 md:mb-14 break-words px-2">
        {{ subtitle }}
      </h2>

      <!-- Content slot for custom HTML with rich formatting -->
      <div class="mx-auto mt-10 md:mt-14 max-w-2xl text-base sm:text-[18px] leading-7 sm:leading-8 tracking-wide break-words">
        <slot />
      </div>

      <!-- Optional CTA button -->
      <div v-if="showCTA" class="flex justify-start md:justify-center mt-10">
        <NuxtLink :to="ctaLink" class="inline-block">
          <button
            type="button"
            class="uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300 border-2 border-gray-600 dark:border-gray-500 px-6 sm:px-8 py-3 sm:py-3.5 rounded-md shadow-[0_3px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_6px_0_rgba(255,255,255,0.1)] transition-all bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
            :aria-label="`${ctaText} - En savoir plus`"
          >
            {{ ctaText }}
          </button>
        </NuxtLink>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
import type { PageTemplateProps } from '~/types'

// Define props with defaults and TypeScript types
const props = withDefaults(defineProps<PageTemplateProps>(), {
  titleStyle: 'handwritten',
  subtitle: '',
  subtitleStyle: 'normal',
  showBackButton: false,
  backText: 'Retour',
  backLink: '/',
  showCTA: false,
  ctaText: 'En apprendre plus',
  ctaLink: '#',
  bgImage: '',
  bgImageOpacity: 0.3,
  bgImagePosition: 'center',
  bgImageSize: 'cover',
})

// Compute background style for main element
const mainBackgroundStyle = computed(() => {
  if (!props.bgImage) return {}

  return {
    backgroundImage: `url(${props.bgImage})`,
    backgroundPosition: props.bgImagePosition,
    backgroundSize: props.bgImageSize,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }
})

// Compute title classes based on style
const titleClass = computed(() => {
  switch (props.titleStyle) {
    case 'handwritten':
      return 'title-handwritten text-[40px] sm:text-[56px] md:text-[72px] font-black uppercase tracking-[.1em] sm:tracking-[.15em]'
    case 'bold':
      return 'title-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide'
    case 'custom':
      return 'text-3xl sm:text-4xl md:text-6xl font-bold'
    default:
      return 'text-3xl sm:text-4xl md:text-6xl font-bold'
  }
})

// Compute subtitle classes based on style
const subtitleClass = computed(() => {
  switch (props.subtitleStyle) {
    case 'handwritten':
      return 'subtitle-handwritten text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal'
    case 'normal':
      return 'text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-gray-600 dark:text-gray-400'
    case 'custom':
      return 'text-lg sm:text-xl md:text-2xl'
    default:
      return 'text-lg sm:text-xl md:text-2xl'
  }
})
</script>

<style scoped>
/* Handwritten title with Lazydog font and shadow */
.title-handwritten {
  font-family: 'Inclusive Sans', sans-serif;
  color: #F4A694;
  font-weight: bold;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

@media (min-width: 768px) {
  .title-handwritten {
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);
  }
}

:global(.dark) .title-handwritten {
  font-family: 'Inclusive Sans', sans-serif;
  color: #F4A694;
}

/* Bold title with Garet Heavy */
.title-bold {
  font-family: 'Inclusive Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  font-weight: 900;
  color: #F4A694;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Handwritten subtitle with Lazydog font */
.subtitle-handwritten {
  font-family: 'Inclusive Sans', sans-serif;
  color: #8B7B8B;
  text-shadow: 2px 2px 0 rgba(244, 166, 148, 0.3);
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

@media (min-width: 768px) {
  .subtitle-handwritten {
    text-shadow: 3px 3px 0 rgba(244, 166, 148, 0.3);
  }
}

:global(.dark) .subtitle-handwritten {
  color: #B8A8B8;
}

/* Typography refinements */
main {
  line-height: 1.75;
  font-family: 'Inclusive Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Style for content paragraphs */
:slotted(p) {
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

:slotted(strong) {
  font-weight: 900;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

:global(.dark) :slotted(strong) {
  color: #E5E7EB;
}
</style>




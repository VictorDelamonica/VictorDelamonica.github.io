<template>
  <main class="min-h-screen bg-[#F7EDEA] dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-sans transition-colors duration-300">
    <section class="mx-auto w-full max-w-5xl px-6 pt-10 pb-20 md:pt-14">

      <!-- Title -->
      <h1 :class="titleClass" class="text-center mb-2 select-none">
        {{ title }}
      </h1>

      <!-- Subtitle (optional) -->
      <p v-if="subtitle" :class="subtitleClass" class="mx-auto max-w-3xl text-center mb-10 md:mb-14">
        {{ subtitle }}
      </p>

      <!-- Content slot for custom HTML with rich formatting -->
      <div class="mx-auto mt-10 md:mt-14 max-w-3xl text-[18px] leading-8 tracking-wide">
        <slot />
      </div>

      <!-- Optional CTA button -->
      <div v-if="showCTA" class="flex justify-start md:justify-center mt-10">
        <NuxtLink :to="ctaLink" class="inline-block">
          <button
            class="uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300 border-2 border-gray-600 dark:border-gray-500 px-6 sm:px-8 py-3 sm:py-3.5 rounded-md shadow-[0_3px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_6px_0_rgba(255,255,255,0.1)] transition-all bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {{ ctaText }}
          </button>
        </NuxtLink>
      </div>

    </section>
  </main>
</template>

<script setup>
// Define props with defaults
const props = defineProps({
  // Main title text
  title: {
    type: String,
    required: true
  },

  // Title styling: 'handwritten' (Lazydog with shadow) or 'bold' (Garet Heavy) or 'custom'
  titleStyle: {
    type: String,
    default: 'handwritten',
    validator: (value) => ['handwritten', 'bold', 'custom'].includes(value)
  },

  // Subtitle text (optional)
  subtitle: {
    type: String,
    default: ''
  },

  // Subtitle styling: 'handwritten' or 'normal' or 'custom'
  subtitleStyle: {
    type: String,
    default: 'normal',
    validator: (value) => ['handwritten', 'normal', 'custom'].includes(value)
  },

  // Show CTA button
  showCTA: {
    type: Boolean,
    default: false
  },

  // CTA button text
  ctaText: {
    type: String,
    default: 'En apprendre plus'
  },

  // CTA button link
  ctaLink: {
    type: String,
    default: '#'
  }
})

// Compute title classes based on style
const titleClass = computed(() => {
  if (props.titleStyle === 'handwritten') {
    return 'title-handwritten text-[56px] md:text-[72px] font-black uppercase tracking-[.15em]'
  } else if (props.titleStyle === 'bold') {
    return 'title-bold text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide'
  }
  return 'text-4xl md:text-6xl font-bold'
})

// Compute subtitle classes based on style
const subtitleClass = computed(() => {
  if (props.subtitleStyle === 'handwritten') {
    return 'subtitle-handwritten text-3xl md:text-4xl lg:text-5xl font-normal'
  } else if (props.subtitleStyle === 'normal') {
    return 'text-xl md:text-2xl font-semibold leading-snug text-gray-600 dark:text-gray-400'
  }
  return 'text-xl md:text-2xl'
})
</script>

<style scoped>
/* Handwritten title with Lazydog font and shadow */
.title-handwritten {
  font-family: 'Lazydog', cursive;
  color: #F4A694;
  font-weight: bold;
  text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);
}


/* Bold title with Garet Heavy */
.title-bold {
  font-family: 'Garet', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  font-weight: 900;
  color: #F4A694;
  //text-shadow: 8px 8px 0 rgba(128, 128, 128, 0.4);
  letter-spacing: 0.05em;
}

:global(.dark) .title-bold {
  //text-shadow: 8px 8px 0 rgba(100, 100, 100, 0.5);
}

/* Handwritten subtitle with Lazydog font */
.subtitle-handwritten {
  font-family: 'Lazydog', cursive;
  color: #8B7B8B;
  text-shadow: 6px 6px 0 rgba(244, 166, 148, 0.3);
}

:global(.dark) .subtitle-handwritten {
  color: #B8A8B8;
  //text-shadow: 6px 6px 0 rgba(244, 166, 148, 0.25);
}

/* Typography refinements */
main {
  line-height: 1.75;
  font-family: 'Garet', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
}

/* Style for content paragraphs */
:slotted(p) {
  margin-bottom: 1.5rem;
}

:slotted(strong) {
  font-weight: 600;
  color: #374151;
}

:global(.dark) :slotted(strong) {
  color: #E5E7EB;
}
</style>


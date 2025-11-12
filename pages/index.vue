<template>
  <main class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans">
    <div class="opacity-100 animate-fade-in-down">
      <Hero />
      <Exposition />
      <Tables />
      <Circle />
      <Alternative />
      <Application />
    </div>
  </main>
</template>

<script setup lang="ts">
// SEO metadata
useHead({
  title: 'IncluSens - Association pour la visibilité du handicap invisible',
  meta: [
    {
      name: 'description',
      content: '12 millions de personnes en France vivent avec un handicap invisible. IncluSens rend visibles ces réalités et accompagne patients, aidants et proches.',
    },
    {
      property: 'og:title',
      content: 'IncluSens - Association pour la visibilité du handicap invisible',
    },
    {
      property: 'og:description',
      content: '12 millions de personnes en France vivent avec un handicap invisible.',
    },
  ],
})

definePageMeta({
  layout: 'default',
})
</script>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out;
}
</style>


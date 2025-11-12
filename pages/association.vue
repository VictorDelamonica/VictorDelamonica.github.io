<template>
  <main class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans">
    <div class="opacity-100 animate-fade-in-down">
      <History />
      <Desk />
      <Missions />
      <Adhesion />
      <Helper />
      <Dons />
    </div>
  </main>
</template>

<script setup lang="ts">
// SEO metadata
useHead({
  title: 'Notre Association',
  meta: [
    {
      name: 'description',
      content: 'Découvrez l\'histoire d\'IncluSens, notre équipe, nos missions et comment nous rejoindre pour agir ensemble contre l\'exclusion liée au handicap invisible.',
    },
    {
      property: 'og:title',
      content: 'Notre Association - IncluSens',
    },
    {
      property: 'og:description',
      content: 'Découvrez l\'histoire d\'IncluSens et comment nous agissons pour la visibilité du handicap invisible.',
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


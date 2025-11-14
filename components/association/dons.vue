<template>
  <PageTemplate
      subtitle="Dons"
      subtitle-style="handwritten"
      cta-text="Faire un don"
      cta-link="https://www.helloasso.com/associations/inclusens/formulaires/1"
      :show-c-t-a="true"
  >
    <MDC :value="content" tag="div" />
    <br/>
    <MDC :value="content1" tag="div"/>
  </PageTemplate>
</template>

<script setup>
const content = `
Faire un don à IncluSens, c’est contribuer directement à nos actions pour les patients, les aidants et la sensibilisation au handicap invisible.

Chaque euro récolté nous permet :
- • d’organiser des ateliers adaptés,
- • de développer un application utile regroupant des informations sur le handicap,
- • de développer des outils concrets pour mieux vivre avec la maladie,
- • de mettre en place des cercles de paroles et des tables rondes,
- • de déployer notre exposition dans les entreprises partout en France.
`

const content1 = `Le **don est libre**, chacun **participe selon ses moyens**, et **chaque contribution a un impact** réel.`
// Use the default layout
definePageMeta({layout: 'default'})
</script>

<style scoped>
/* Markdown content styling */
:deep(p) {
  margin-bottom: 1.5rem;
  line-height: 2rem;
  font-size: 18px;
  color: inherit;
}

:deep(strong) {
  font-weight: 700;
  color: inherit;
}

:deep(p:last-child) {
  margin-bottom: 0;
}
</style>

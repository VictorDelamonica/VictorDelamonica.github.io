<template>
  <PageTemplate
      subtitle="Dons"
      subtitle-style="handwritten"
  >
    <MDC :value="content" tag="div" />
    <br/>
    <MDC :value="content1" tag="div"/>
    <p class="text-center">
      <br/>
      <strong>Comment nous rejoindre ?</strong>
    </p>
      <MDC :value="content2" tag="div" />
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

const content2 = `
Contactez nous via notre **formulaire en ligne** ou venez nous rencontrer lors de nos événements. (VOIR HELLO ASSO)

Nous serons ravies d’échanger avec vous et de vous accueillir dans notre équipe.
`
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

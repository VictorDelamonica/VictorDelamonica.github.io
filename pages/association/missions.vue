<template>
  <PageTemplate
      subtitle="Nos missions"
      subtitle-style="handwritten"
  >
    <MDC :value="content" tag="div" />
  </PageTemplate>
</template>

<script setup>
const content = `
IncluSens vise à transformer nos épreuves en actions utiles.

Parce que nous savons ce que signifie chercher de l’aide et ne pas la trouver, nous avons décidé de créer des solutions concrètes pour que d’autres n’aient pas à traverser seuls ce chemin.

Notre mission est d’abord **d’accompagner**. Offrir aux patients et à leurs proches des **espaces où l’on peut parler librement, partager des outils, retrouver confiance en soi mais aussi apprendre à mieux gérer sa fatigue, son stress et sa douleur.**

Notre mission est aussi de **sensibiliser**. Dans les **entreprises mais aussi des particuliers**, dans la société, là où trop souvent le handicap invisible reste méconnu. Nous voulons ouvrir les yeux, **changer les regards et favoriser une meilleure compréhension**.

Enfin, notre mission est de **créer du lien**. Entre la vie personnelle et le monde professionnel, entre les malades et les aidants, entre les individus et la société.

Parce que l’inclusion n’est pas un mot, c’est un chemin que nous construisons ensemble.
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

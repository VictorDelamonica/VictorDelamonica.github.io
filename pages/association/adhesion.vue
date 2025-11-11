<template>
  <PageTemplate
      subtitle="Adhésion"
      subtitle-style="handwritten"
  >
    <p>
      En rejoignant IncluSens, vous devenez acteur d’un projet collectif qui place l’inclusion et la solidarité au cœur de ses actions.
    </p>

    <p>
      Votre soutien nous permet d’organiser des ateliers pour les patients et les aidants, de créer des espaces de dialogue et de sensibiliser le monde de l’entreprise au handicap invisible.
    </p>

    <p class="text-center">
      <strong>L’adhésion est fixée à 12 € par an.</strong>
    </p>
    <p>
      Un geste simple, mais qui fait toute la différence. Il nous aide à développer nos projets et à donner plus de visibilité aux réalités trop souvent ignorées.
      En adhérant, vous soutenez non seulement nos initiatives, mais vous rejoignez aussi une communauté engagée pour changer les regards et construire une société plus inclusive.
    </p>

    <p class="text-center">
      <strong class="text-center">Comment adhérer ?</strong>
    </p>

    <MDC :value="content" tag="div" />

    <p class="text-center">
      (VOIR HELLO ASSO)
    </p>
  </PageTemplate>
</template>

<script setup>
const content = `
Il vous suffit de remplir le **formulaire d’adhésion en ligne** (ou sur papier lors de nos événements) et de régler votre cotisation annuelle.
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

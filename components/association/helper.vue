<template>
  <PageTemplate
      subtitle="Devenir bénévole"
      subtitle-style="handwritten"
  >
    <MDC :value="content" tag="div" />
<!--    <p class="text-center">-->
<!--      <br/>-->
<!--      <strong>Comment nous rejoindre ?</strong>-->
<!--    </p>-->
<!--    <MDC :value="content1" tag="div" />-->
  </PageTemplate>
</template>

<script setup>
const content = `
Rejoindre IncluSens comme bénévole, c’est choisir de donner de son temps et de son énergie pour faire bouger les lignes de l’inclusion.

Nous recherchons aujourd’hui :

• des patients experts, **formés aux 40 heures d’éducation thérapeutique**, pour **partager leur expérience et accompagner** d’autres patients à travers nos ateliers ;\n
• des bénévoles motivés, prêts à nous aider à **déployer notre exposition** « Le handicap invisible en entreprise » partout en France, et **à animer des tables rondes** pour sensibiliser le grand public comme les professionnels.

Peu importe le temps que vous pouvez consacrer, chaque contribution a un impact.
`

const content1 = `
Contactez nous via notre **formulaire en ligne** ou venez nous rencontrer lors de nos événements.

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

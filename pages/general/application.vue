<template>
  <PageTemplate
      title="Notre application"
      title-style="handwritten"
      cta-text="Bientôt téléchargeable"
      :show-c-t-a="true"
  >
    <p>
      Notre application permet aux patients et aux aidants de
      <strong>trouver les informations essentielles sur le handicap et la gestion de la douleur, pour débuter la pratique psycho-corporelle.</strong>
    </p>

    <p>
      Véritable compagnon numérique, cette application offre un espace où chacun peut
      <strong> approfondir ses connaissances </strong>
      sur le handicap, retrouver des
      <strong> conseils pratiques </strong>
      et bénéficier d’
      <strong> d’outils concrets pour mieux vivre </strong>
      au quotidien.
    </p>

    <p>
      Accessible depuis chez soi comme en déplacement, elle vise à
      <strong> maintenir le lien, à prolonger le soutien </strong>
      et à rendre l’inclusion toujours plus tangible.
    </p>
  </PageTemplate>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Nos tables rondes - Sensibilisation en entreprise',
  meta: [
    {
      name: 'description',
      content: 'Notre exposition met en lumière les parcours de personnes vivant avec un handicap invisible en entreprise.'
    }
  ]
})

// Use the default layout
definePageMeta({layout: 'default'})
</script>



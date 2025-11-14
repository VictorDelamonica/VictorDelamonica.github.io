<template>
  <PageTemplate
    title="NOTRE EXPOSITION"
    title-style="handwritten"
    subtitle="Le handicap invisible en entreprise"
    subtitle-style="handwritten"
    bg-image="/bg/exposition.png"
    cta-text="Soutenir l'exposition • Au-delà des apparences"
    cta-link="https://www.helloasso.com/associations/inclusens/collectes/exposition-au-dela-des-apparences"
    :show-c-t-a="true"
  >
    <p>
      Notre exposition met en lumière les
      <strong>parcours de personnes vivant avec un handicap,</strong>
      mettant en avant
      <strong>leurs témoignages et leurs histoires.</strong>
    </p>

    <p>
      Elle vise à
      <strong>révéler les répercussions</strong>
      concrètes de ces situations sur la vie professionnelle des personnes, notamment les incompréhensions,
      les obstacles mais aussi la résilience et les adaptations constantes.
    </p>

    <p>
      Cette exposition
      <strong>invite à changer de regard, à mieux comprendre ces réalités</strong>
      et à ouvrir la voie vers un monde du travail plus inclusif.
    </p>
  </PageTemplate>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Notre Exposition - Le handicap invisible en entreprise',
  meta: [
    {
      name: 'description',
      content: 'Notre bg met en lumière les parcours de personnes vivant avec un handicap invisible en entreprise.'
    }
  ]
})

// Use the default layout
definePageMeta({ layout: 'default' })
</script>



<template>
  <PageTemplate
    title="Inclusens"
    title-style="handwritten"
    subtitle="12 millions de personnes en France vivent aujourd'hui avec un handicap, dont 80 % sont invisibles."
    subtitle-style="normal"
    :show-c-t-a="true"
    cta-text="En apprendre plus"
    cta-link="/association"
  >
    <p>
      Derrière ce chiffre, il y a des <strong>patients</strong>,
      des <strong>aidants</strong>, des <strong>proches</strong>, qui chaque jour doivent affronter des défis souvent
      méconnus et mal compris.
    </p>

    <p>
      IncluSens est née de ce constat. Notre association veut
      <strong>rendre visibles ces réalités</strong>,
      <strong>créer des passerelles entre le vécu et la société</strong>,
      et offrir un espace où la parole, la sensibilisation et la compréhension trouvent toute leur place.
    </p>

    <p>
      Notre rôle est <strong>d'accompagner, faire connaître et donner du sens aux expériences individuelles comme aux initiatives collectives</strong>.
    </p>

    <p>
      IncluSens veut contribuer à <strong>changer les regards, à briser les tabous</strong> et à bâtir une société où la différence n'exclut pas, mais enrichit.
    </p>
  </PageTemplate>
</template>

<script setup>
// Page metadata
useHead({
  title: 'IncluSens - Association pour la visibilité du handicap invisible',
  meta: [
    {
      name: 'description',
      content: '12 millions de personnes en France vivent avec un handicap invisible. IncluSens rend visibles ces réalités.'
    }
  ]
})

// Use the default layout
definePageMeta({ layout: 'default' })
</script>


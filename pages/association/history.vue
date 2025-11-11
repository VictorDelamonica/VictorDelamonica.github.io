
<template>
  <PageTemplate
      title="Notre association"
      title-style="handwritten"
      subtitle="Notre Histoire"
      subtitle-style="handwritten"
      :show-back-button="true"
      back-link="/"
      back-text="Retour"
  >
    <MDC :value="content" tag="div" />
  </PageTemplate>
</template>

<script setup>
const content = `
IncluSens est avant tout une aventure humaine. Derrière l’association, il y a **trois femmes** aux parcours différents mais réunies par une même conviction : **l’inclusion ne doit pas être une option**, mais une réalité vécue au quotidien.

Clarisse est **aidante** pour sa maman atteinte de la **maladie de Crohn**, tout en vivant elle-même avec de l’endométriose.
Yolène vit avec une **sclérose en plaques** et sait combien le **regard des autres peut peser** lorsqu’on découvre la maladie.
Marine s’est relevée d’un **AVC après avoir été cheffe d’entreprise**, et porte aujourd’hui **la voix de celles et ceux qui doivent réinventer leur quotidien** après un tel bouleversement.

Nous nous sommes rencontrées il y a trois ans dans le monde associatif. De nos échanges est née l’idée de créer notre propre structure, pour répondre aux manques que nous avons toutes ressentis.
Nous avons donc souhaiter proposer **des ateliers concrets**, comme Yolène aurait aimé en trouver au début de sa maladie ; offrir des espaces de parole et de soutien aux aidants, comme Clarisse en cherchait pour accompagner sa maman ; et **sensibiliser le monde de l’entreprise**, car trop souvent le handicap reste mal compris, parfois même source d’injustices.

IncluSens est née de ces vécus partagés et de cette volonté commune de **donner du sens aux expériences individuelles, briser l’isolement et faire évoluer les regards.**
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

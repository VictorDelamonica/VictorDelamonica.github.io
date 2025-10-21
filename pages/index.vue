<template>
  <main class="min-h-screen bg-[#F7EDEA] dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-sans transition-colors duration-300">
    <section class="mx-auto w-full max-w-5xl px-6 pt-10 pb-20 md:pt-14">
      <!-- Title -->
      <h1 class="title-font text-center text-[56px] md:text-[72px] font-black uppercase tracking-[.15em] mb-2 select-none">
        Inclusens
      </h1>

      <!-- Subtitle / Big statement -->
      <p class="mx-auto max-w-3xl text-center text-xl md:text-2xl font-semibold leading-snug text-gray-600 dark:text-gray-400">
        12 millions de personnes en France vivent aujourd'hui avec un
        handicap, dont 80 % sont invisibles.
      </p>

      <!-- Content column -->
      <div class="mx-auto mt-10 md:mt-14 max-w-3xl text-[18px] leading-8 tracking-wide">
        <p class="mb-6">
          Derrière ce chiffre, il y a des <strong class="font-semibold text-gray-700 dark:text-gray-200">patients</strong>,
          des <strong class="font-semibold text-gray-700 dark:text-gray-200">aidants</strong>, des
          <strong class="font-semibold text-gray-700 dark:text-gray-200">proches</strong>, qui chaque jour doivent affronter des défis souvent
          méconnus et mal compris.
        </p>

        <p class="mb-6">
          IncluSens est née de ce constat. Notre association veut
          <strong class="font-semibold text-gray-700 dark:text-gray-200"> rendre visibles ces réalités</strong>,
          <strong class="font-semibold text-gray-700 dark:text-gray-200"> créer des passerelles entre le vécu et la société</strong>,
          et offrir un espace où la parole, la sensibilisation et la compréhension trouvent toute leur place.
        </p>

        <p class="mb-6">
          Notre rôle est <strong class="font-semibold text-gray-700 dark:text-gray-200">d'accompagner, faire connaître et donner du sens aux expériences individuelles comme aux initiatives collectives</strong>.
        </p>

        <p class="mb-10">
          IncluSens veut contribuer à <strong class="font-semibold text-gray-700 dark:text-gray-200">changer les regards, à briser les tabous</strong> et à bâtir une société où la différence n'exclut pas, mais enrichit.
        </p>

        <div class="flex justify-start md:justify-center">
          <NuxtLink to="#" class="inline-block">
            <button
              class="uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300 border-2 border-gray-600 dark:border-gray-500 px-6 sm:px-8 py-3 sm:py-3.5 rounded-md shadow-[0_3px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_0_rgba(0,0,0,0.12)] dark:hover:shadow-[0_6px_0_rgba(255,255,255,0.1)] transition-all bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              En apprendre plus (bientôt)
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Use the default layout
definePageMeta({ layout: 'default' })
</script>

<style scoped>
/* Hand-written, puffy title effect that mimics the visual style */

.title-font {
  font-family: 'Lazydog', cursive;
  color: #F4A694;
  font-weight: bold;
  text-shadow:
    5px 5px 0 rgba(0, 0, 0, 0.5);
}

/***** Fine-tune typography to be closer to the mock *****/
main {
  line-height: 1.75;
  font-family: 'Garet', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
}
</style>

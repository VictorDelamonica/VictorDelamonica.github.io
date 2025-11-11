<template>
  <main class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans">
    <Default/>
    <div class="opacity-100 animate-fade-in-down">
      <Hero/>
      <Exposition/>
      <Tables/>
      <Circle/>
      <Alternative/>
      <Application/>
    </div>
  </main>
</template>

<script setup>
import Default from "~/layouts/default.vue";
import Hero from "~/pages/general/hero.vue";
import Exposition from "~/pages/general/exposition.vue";
import Tables from "~/pages/general/tables.vue";
import Circle from "~/pages/general/circle.vue";
import Alternative from "~/pages/general/alternative.vue";
import Application from "~/pages/general/application.vue";
import Association from "~/pages/association.vue";
</script>

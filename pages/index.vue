<template>
  <main class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans">
    <Default/>
    <div class="opacity-100 animate-fade-in-down">
      <Hero/>
      <Exposition/>
      <Tables/>
      <Circle/>
      <Alternative/>
    </div>
  </main>
</template>

<script setup>
import Default from "~/layouts/default.vue";
import Hero from "~/pages/hero.vue";
import Exposition from "~/pages/exposition.vue";
import Tables from "~/pages/tables.vue";
import Circle from "~/pages/circle.vue";
import Alternative from "~/pages/alternative.vue";
</script>

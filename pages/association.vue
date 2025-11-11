<template>
  <main class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans">
    <Default/>
    <div class="opacity-100 animate-fade-in-down">
      <History/>
      <Desk/>
      <Missions/>
      <Adhesion/>
      <Helper/>
      <Dons/>
    </div>
  </main>
</template>

<script setup>
import Desk from "~/pages/association/desk.vue";
import History from "~/pages/association/history.vue";
import Default from "~/layouts/default.vue";
import Missions from "~/pages/association/missions.vue";
import Adhesion from "~/pages/association/adhesion.vue";
import Helper from "~/pages/association/helper.vue";
import Dons from "~/pages/association/dons.vue";
</script>
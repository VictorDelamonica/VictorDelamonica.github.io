<template>
  <div class="bg-white dark:bg-gray-800">
    <NuxtLayout>
      <Transition name="page" mode="out-in">
        <NuxtPage/>
      </Transition>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>
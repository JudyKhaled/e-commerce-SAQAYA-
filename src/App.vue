<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<style scoped>
/* Add any global styles here if needed */
</style>

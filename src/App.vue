<template>
  <header>
    <Header />
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

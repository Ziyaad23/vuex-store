<template>
  <header>
    <Header />
  </header>
  <div class="container my-0 mx-auto">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

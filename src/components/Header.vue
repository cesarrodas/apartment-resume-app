<script setup lang="ts">
  import SearchBar from './SearchBar.vue';
</script>


<template>
  <div class="Header">
    <img class="Header-image" src="../assets/hero.jpg" />
    <h1 class="Header-title">FIND AN APARTMENT</h1>
    <h2 class="Header-subtitle">NO BROKERS, NO PROBLEM</h2>
    <SearchBar />
  </div>
</template>

<style scoped>
  .Header {
    height: 100vh;
    position: relative;
    background: transparent;
  }

  .Header-image {
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
    position: absolute;
    left:0;
    top: 0;
    z-index: -1;
  }

  .Header-title {
    font-size: 3rem;
    color: white;
    font-weight: bold;
    padding-top: 6rem;
    padding-left: 6rem;
    line-height: 3rem;
  }

  .Header-subtitle {
    font-size: 2.2rem;
    color: white;
    font-weight: bold;
    padding-left: 6rem;
    padding-top: 1rem;
    margin: 0;
    line-height: 2.5rem;
  }
</style>
<script setup lang="ts">
  import SearchBar from './SearchBar.vue';
</script>


<template>
  <div class="Header">
    <img class="Header-image" src="../assets/hero.jpg" />
    <div class="Header-container">
      <h1 class="Header-title">FIND AN APARTMENT</h1>
      <h2 class="Header-subtitle">NO BROKERS, NO PROBLEM</h2>
      <SearchBar />
      <button class="Learn">LEARN MORE</button>
    </div>
  </div>
</template>

<style scoped>

  .Header {
    height: 100vh;
    position: relative;
    background: transparent;
  }

  .Header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .Header-image {
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
    position: absolute;
    left:0;
    top: 0;
    object-fit: cover;
    z-index: -1;
  }

  .Header-title {
    font-size: 3rem;
    color: white;
    font-weight: bold;
    padding-top: 2rem;
    padding-left: 2rem;
    line-height: 3rem;
  }

  .Header-subtitle {
    font-size: 2.2rem;
    color: white;
    font-weight: bold;
    padding-left: 2rem;
    padding-top: 1rem;
    margin: 0;
    line-height: 2.5rem;
  }

  .Learn {
    background-color: hsl(120, 49%, 58%);
    padding: 1rem 1.5rem;
    width: fit-content;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 2rem;
    margin-top: 2rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }

  .Learn:hover {
    background-color: hsl(120, 49%, 48%);
  }

  @media screen and (min-width: 900px ) {

    .Header-title {
      padding-left: 6rem;
    }

    .Header-subtitle {
      padding-left: 6rem;
    }
    .Learn {
      margin-left: 6rem;
    }
  }
</style>
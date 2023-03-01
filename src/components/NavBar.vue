<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="Navbar">
    <span class="Navbar-title">rental</span><span class="Navbar-title-m">m</span><span class="Navbar-title-end">aster</span>
  </div>
</template>

<style scoped>
  .Navbar {
    position: fixed;
    top: 0;
    height: 60px;
    background-color: rgba(255,255,255,0.6);
    width: 100%;
    z-index: 10;
    font-size: 30px;
    line-height: 30px;
  }

  .Navbar-title {
    margin-left: 4rem;
  }

  .Navbar-title-m {
    color: blue;
    text-decoration: underline;
  } 

  .Navbar-title-end {
    font-weight: bold;
  }
</style>

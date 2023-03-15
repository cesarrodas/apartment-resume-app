<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Information from './components/Information.vue'
import Footer from './components/Footer.vue'
import Benefits from './components/Benefits.vue'
import Conclusion from './components/Conclusion.vue'
</script>

<template>
  <div class="Fullbody">
    <NavBar msg="You did it!" />
    <Header />
    <Information />
    <Benefits />
    <Conclusion />
    <Footer />
  </div>
</template>

<style scoped>
  .Fullbody {
    width: 100%;
    overflow-x: hidden;
  }
</style>

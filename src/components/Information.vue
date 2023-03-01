<template>
  <div class="Information">
    <img src="../assets/city.svg" />
  </div>
</template>

<style scoped>
  .Information {
    height: 100vh;
    position: relative;
    padding: 0;
    overflow: hidden;
    width: 100%;
    background: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
  }

  .Information > img {
    width: 110%;
    position: absolute;
    bottom: -4rem;
    left: -2rem;
  }
</style>
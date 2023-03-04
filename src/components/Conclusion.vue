<template>
  <div class="Conclusion">
    <img class="Conclusion-image" src="../assets/conclusion.jpg" />
    <h2 class="Conclusion-message">WE DELIVER TODAY!</h2>
    <button>SIGN UP</button>
  </div>
</template>

<style scoped>
  .Conclusion {
    height: 100vh;
    filter: brightness(0.);
    position: relative;
    background-color: rgb(187, 182, 182);
    overflow: hidden;
  }

  .Conclusion-image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    filter: brightness(80%);
  }

  .Conclusion-message {
    color: white;
    font-size: 3rem;
    font-weight: bold;
  }
</style>
<template>
  <div class="Benefits">
    <img class="Benefits-image" src="../assets/benefits.jpg" />
    <h2 class="Benefits-message">WE ONLY SHOW <br/> YOU REAL <span class="Benefits-special-text">Quality</span> <br/> LISTINGS...... </h2>
    <span class="Benefits-circles">
      <span></span>
    </span>
  </div>
</template>

<style scoped>

  .Benefits {
    height: 100vh;
    position: relative;
    background: transparent;

  }

  .Benefits-image {
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .Benefits-message {
    font-size: 3rem;
    color: white;
  }

  .Benefits-special-text {
    font-family: 'Dancing Script', cursive;
    font-weight: 700;
    color: blue;
  }

  .Benefits-circles > span:nth-child(1) {
    background: transparent;
    width: 10rem;
    height: 10rem;
    display: block;
    border: 16px solid rgba(255, 255, 255, .6);
    border-radius: 100px;
  }
</style>
<template>
  <div class="Benefits">
    <img class="Benefits-image" src="../assets/benefits.jpg" />
    <div class="Benefits-container">
      <h2 class="Benefits-message">WE ONLY SHOW <br/> YOU REAL <span class="Benefits-special-text">Quality</span> <br/> LISTINGS...... </h2>
    </div>
    <div class="Benefits-circles-container">
      <span class="Benefits-circles">
        <span><h3>NO SPAN</h3></span>
        <span><h3>NO FAKES</h3></span>
        <span><h3>NO FEE</h3></span>
        <h3>Quality</h3>
      </span>
    </div>
  </div>
</template>

<style scoped>

  .Benefits {
    height: 100vh;
    position: relative;
    background: transparent;

  }

  .Benefits-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-left: 4rem;
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
    font-weight: bold;
  }

  .Benefits-special-text {
    font-family: 'Dancing Script', cursive;
    font-weight: 700;
    color: blue;
  }

  .Benefits-circles-container {
    width: 50vw;
    position: absolute;
    left: 50vw;
    top: 0;
    height: 100vh;
  }


  .Benefits-circles {
    margin-top: 4rem;
    position: relative;
    height: 100%;
    width: 100%;
    display: block;
  }

  .Benefits-circles > span > h3 {
    position: absolute;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .Benefits-circles > h3 {
    position: absolute;
    left: 35%;
    top: 30%;
    color: blue;
  }

  .Benefits-circles > span:nth-child(1) > h3 {
    left: 15%;
    top: 25%;
  } 

  .Benefits-circles > span:nth-child(2) > h3 {
    right: 15%;
    top: 25%;
  } 

  .Benefits-circles > span:nth-child(3) > h3 {
    bottom: 25%;
    left: 35%;
  } 

  .Benefits-circles > span:nth-child(1) {
    background: transparent;
    width: 50%;
    height: 50%;
    display: block;
    border: .7rem solid rgba(255, 255, 255, .6);
    border-radius: 50%;
  }

  .Benefits-circles > span:nth-child(2) {
    width: 50%;
    height: 50%;
    position: absolute;
    left: 30%;
    top: 0;
    border-radius: 50%;
    border: .7rem solid rgba(255, 255, 255, .6);
    background: transparent;
  }
  .Benefits-circles > span:nth-child(3) {
    width: 50%;
    height: 50%;
    left: 15%;
    position: absolute;
    bottom: 25%;
    border-radius: 50%;
    border: .7rem solid rgba(255, 255, 255, .6);
    background: transparent;
  }

</style>
<template>
  <div class="Benefits">
    <img class="Benefits-image" src="../assets/benefits.jpg" />
    <div class="parent">
      <div>
        <div class="Benefits-container">
          <h2 class="Benefits-message">WE ONLY SHOW <br/> YOU REAL <span class="Benefits-special-text">Quality</span> <br/> LISTINGS...... </h2>
        </div>
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
  </div>
</template>

<style scoped>

  .Benefits {
    height: calc(2 * 100vw);
    position: relative;
    /* background: transparent;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr; */
  }

  .parent {
    height: calc(2 * 100vw);
    position: relative;
    background: transparent;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .Benefits-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vw);
    padding-left: 4rem;
  }

  .Benefits-image {
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
    position: absolute;
    object-fit: cover;
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
    top: 0;
    height: 100%;
  }


  .Benefits-circles {
    position: relative;
    width: 100%;
    height: calc(100vw);
    display: block;
    margin-left: 10%;
  }

  .Benefits-circles > span > h3 {
    position: absolute;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .Benefits-circles > h3 {
    font-family: 'Dancing Script', cursive;
    position: absolute;
    left: 32.5%;
    top: 30%;
    color: blue;
    font-weight: 700;
    font-size: 2rem;
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

  @media (min-width: 1200px) { 
    .Benefits {
      height: 100vh;
      position: relative;
      background: transparent;
    }

    .parent {
      height: 100vh;
      max-width: 1200px;
      position: relative;
      background: transparent;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      margin: 0 auto;
    }

    .Benefits-image {
      object-fit: cover;
    }

    .Benefits-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding-left: 4rem;
    }

    .Benefits-circles {
      margin-top: 35%;
      position: relative;
      max-height: 620px; 
      width: 100%;
      display: block;
    }
  }


</style>
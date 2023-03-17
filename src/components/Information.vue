<template>
  <div class="Information">
    <img src="../assets/city.svg" />
    <div class="Information-grid">
      <div class="Information-container">
        <h2>NYC Renters pay on average </h2>
        <h2>$4,500 in broker commission</h2>
        <div class="Information-Divider-container"><div class="Information-Divider"></div></div>
        <h2>Landlord vacancies </h2>
        <h2> are tough to find</h2>
        <div class="Information-Divider-container"><div class="Information-Divider"></div></div>
        <h2>WE <span class="Information-special-text">Aggregate</span> <br/> LISTINGS DIRECT <br/> FROM LANDLORDS</h2>
      </div>
  
      <div class="ImagesContainer">
        <div class="Information-Circle one">
        </div>
        <div class="Information-Circle two">
        </div>
        <div class="Information-Circle three">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .Information {
    position: relative;
    padding: 0;
    width: 100%;
    background: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
  }

  .Information-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-auto-rows: auto;
  }

  .Information-container {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  .Information > img {
    width: 110%;
    position: absolute;
    bottom: -4rem;
    left: -2rem;
  }

  .Information-Divider-container {
    display: flex;
    justify-content: right;
  }

  .Information-Divider {
    width: 20vw;
    height: .2rem;
    background: white;
    margin: .5rem;
    margin-right: 4rem;
    text-align: right;
  }

  .Information-special-text {
    font-family: 'Dancing Script', cursive;
    font-weight: 700;
    font-size: 3.5rem;
    color: blue;
  }

  .ImagesContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Information-Circle {
    height: 10rem;
    width: 10rem;
    border: .3rem solid grey;
    border-radius: 50%;
  }

  .one {
    background-image: url('../assets/apart-1.jpg');
    background-size: cover;
    margin-top: 4rem;
    align-self: start;
    margin-left: 2rem;
  }

  .two {
    background-image: url('../assets/apart-2.jpg');
    background-size: cover;
    align-self: end;
    margin-right: 2rem;
  }

  .three {
    background-image: url('../assets/apart-3.jpg');
    background-size: cover;
    align-self: start;
    margin-left: 2rem;
  }

  h2 {
    font-size: 2.2rem;
    text-align: right;
    color: white;
    font-weight: bold;
    margin-top: .5rem;
    margin-right: 4rem;
    padding-top: .5rem;
  }

  @media (min-width: 900px) {
    /* .ImagesContainer {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    } */
    .Information-Circle {
      height: 10rem;
      width: 10rem;
    }

    .Information-grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    .Information-container {
      order: 2;
    }
  }
</style>
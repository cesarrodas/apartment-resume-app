<template>
  <div class="Information">
    <img src="../assets/city.svg" />
    <h2>NYC Renters pay on average </h2>
    <h2>$4,500 in broker commission</h2>
    <div class="Information-Divider-container"><div class="Information-Divider"></div></div>
    <h2>Landlord vacancies </h2>
    <h2> are tough to find</h2>
    <div class="Information-Divider-container"><div class="Information-Divider"></div></div>
    <h2>WE <span class="Information-special-text">Aggregate</span> <br/> LISTINGS DIRECT <br/> FROM LANDLORDS</h2>

    <div class="ImagesContainer">
      <div class="Information-Circle one">
      </div>
      <div class="Information-Circle two">
      </div>
      <div class="Information-Circle three">
      </div>
    </div>
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
    position: absolute;
    left: 0;
    top: 0;
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Information-Circle {
    width: 24%;
    height: 24%;
    border: .3rem solid grey;
    border-radius: 50%;
  }

  .one {
    background-image: url('../assets/apart-1.jpg');
    background-size: cover;
    margin-top: 4rem;
  }

  .two {
    background-image: url('../assets/apart-2.jpg');
    background-size: cover;
    align-self: end;
  }

  .three {
    background-image: url('../assets/apart-3.jpg');
    background-size: cover;
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
</style>
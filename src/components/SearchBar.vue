<template>
  <span>
    <div class="inputContainer">
      <input placeholder="Where do you want to live?" class="SearchBar"/>
      <img class="location" src="../assets/location.svg" />
    </div>
  </span>
</template>

<style scoped>

  .inputContainer {
    position: relative;
    width: 40vw;
    margin-left: 6rem;
    padding: 0;
    margin-top: 2rem;
  }

  .location {
    position: absolute;
    right: .5rem;
    top: .5rem;
    fill: white;
    height: 2.5rem;
  }
  .SearchBar {
    background: rgba(0, 0, 0, .5);
    border-radius: none;
    border: .4rem solid rgba(255,255,255,0.6);
    width: 40vw;
    position: relative;
    color: white;
    font-size: 1rem;
    padding: .7rem .5rem;
  }

  .SearchBar::placeholder {
    color: white;
  }

  .SearchBar:focus{
    outline: none;
}

</style>
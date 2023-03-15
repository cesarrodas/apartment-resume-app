<template>
  <span>
    <input placeholder="Where do you want to live?" class="SearchBar" />
  </span>
</template>

<style scoped>
  .SearchBar {
    background: rgba(0, 0, 0, .5);
    border-radius: none;
    border: .4rem solid rgba(255,255,255,0.6);
    width: 40vw;
    position: relative;
    margin-left: 6rem;
    color: white;
    font-size: 1rem;
    padding: .7rem .5rem;
    margin-top: 2rem;
  }

  .SearchBar::placeholder {
    color: white;
  }

  .SearchBar:focus{
    outline: none;
}

</style>
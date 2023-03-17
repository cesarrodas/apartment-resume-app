<template>
  <div class="Conclusion">
    <img class="Conclusion-image" src="../assets/conclusion.jpg" />
    <div class="Conclusion-container">
      <h2 class="Conclusion-message">WE <br/>DELIVER <br/> TODAY!</h2>
      <div class="Conclusion-button">
        <button class="Learn">SIGN UP</button>
      </div>
    </div>
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

  .Conclusion-container {
    height: 100vh;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 3rem;
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

  .Conclusion-button {
    display: flex;
    justify-content: end;
  }

  .Learn {
    background-color: hsl(120, 49%, 58%);
    padding: 1rem 1.5rem;
    width: fit-content;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 2rem;
  }

  .Learn:hover {
    background-color: hsl(120, 49%, 48%);
  }
</style>
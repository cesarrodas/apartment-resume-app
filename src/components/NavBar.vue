<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="Navbar">
    <span><span class="Navbar-title">rental</span><span class="Navbar-title-m">m</span><span class="Navbar-title-end">aster</span></span>
    <span class="Navbar-auth"><a>SIGNUP</a>|<a>LOGIN</a></span>
  </div>
</template>
>>
<style scoped>
  .Navbar {
    position: fixed;
    top: 0;
    height: 60px;
    background-color: rgba(255,255,255,0.6);
    width: 100%;
    z-index: 10;
    font-size: 30px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .Navbar-title {
    margin-left: 3rem;
  }

  .Navbar-title-m {
    color: #6a85b6;
    text-decoration: underline;
  } 

  .Navbar-title-end {
    font-weight: bold;
  }

  .Navbar-auth {
    font-size: 1rem;
    margin-right: 3rem;
  }
</style>

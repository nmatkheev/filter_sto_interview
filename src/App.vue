<template>

  <nav id="navbar">
  <img src="@/assets/logo-filter.png">
  </nav>

  <div class="container">
  <router-view/>
  </div>
  
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import "assets/style-all.css"
</style>

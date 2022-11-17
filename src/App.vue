<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Recuperatorio NT2</h1>
      <br>
      <Home/>
    </div>
  </div>
</template>

<script>

import Home from './componentes/Home.vue'


export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
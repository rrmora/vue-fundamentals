<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Indecision />
    <!-- <Counter :start="5" /> -->
  </div>
</template>

<script>
// import Counter from './componentes/Counter.vue'
import Indecision from './componentes/Indecision.vue'

export default {
  name: 'App',
  components: {
    // Counter,
    Indecision
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

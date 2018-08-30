<template>
  <div id="app">
    <VueSelect />
  </div>
</template>

<script>
import VueSelect from './components/VueSelect.vue'

export default {
  name: 'app',
  components: {
    VueSelect
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 200px;
}
</style>

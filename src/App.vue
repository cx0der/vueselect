<template>
  <div id="app">
    <VueSelect :items="selectOptions"/>
  </div>
</template>

<script>
import VueSelect from './components/VueSelect.vue'

export default {
  name: 'app',
  data () {
    return {
      selectOptions: [
        'option 1',
        'option 2',
        'option 3'
      ]
    }
  },
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

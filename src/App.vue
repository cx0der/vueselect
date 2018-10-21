<template>
  <div id="app">
    <div class="comp__container">
      <VueSelect :items="selectOptions" :value.sync="val"/>
    </div>
    <div>
      <p>Current value of val: {{ val }}</p>
      <button
        @click="resetVal">Reset</button>
    </div>
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
      ],
      val: 'option 2'
    }
  },
  components: {
    VueSelect
  },
  methods: {
    resetVal () {
      this.val = 'option 2'
    }
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  justify-content: space-around;
  margin-top: 60px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.comp__container {
  width: 200px;
}
</style>

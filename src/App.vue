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
      val: 'Option 2'
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.comp__container {
  width: 200px;
}
</style>

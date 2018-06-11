<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  @Component
  export default class App extends Vue {
    private beforeCreate () {
      this.$store.dispatch('getUserInfo')
    }
  }
</script>

<style lang="scss" scoped>
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>

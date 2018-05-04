<template>
  <div id="app">
    <div class="ys-container">
      <y-header></y-header>
      <router-view/>
      <y-footer></y-footer>
    </div>
   
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import YHeader from './components/header/index.vue'
  import YFooter from './components/footer/index.vue'
  @Component({
    components: { YHeader, YFooter }
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>

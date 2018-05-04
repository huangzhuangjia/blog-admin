<template>
  <div class="ys-header">
    <div class="ys-header-inner"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'

  @Component({
  })

  export default class YHeader extends Vue {
    
  }
</script>

<style lang='scss' scoped>
@import "@/assets/scss/variable.scss";

.ys-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-width: 1200px;
  background-color: $white;
  height: $header-height;
  .ys-header-inner {
    width: 1200px;
    margin: 0 auto;
  }
}

</style>
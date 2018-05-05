<template>
  <div class="ys-wrapper ys-home-wrapper">

  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'

  @Component({
    metaInfo: {
      title: 'Y学院'
    }
  })
  export default class Home extends Vue {
    private mounted () {
      // this.$message({message: '我是message'})
    }
  }
</script>

<style lang="scss" scoped>

</style>
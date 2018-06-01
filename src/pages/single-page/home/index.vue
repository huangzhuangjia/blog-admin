<template>
  <div>{{name}}</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'home'
})
export default class Home extends Vue {
  private name: string = 'home'
}
</script>

<style>

</style>

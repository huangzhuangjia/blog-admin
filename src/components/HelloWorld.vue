<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import API from '@/api/server'
import Component from 'vue-class-component'
@Component({
  props: {
    propMessage: String
  }
})
export default class HelloWorld extends Vue {
  // initial data
  private msg: string = 'This is a typescript project now'
  // lifecycle hook
  private mounted () {
    this.greet()
  }
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }
  // method
  private async greet () {
   const res = await this.$store.dispatch('login')
   console.log(res)
    // alert('greeting: ' + this.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

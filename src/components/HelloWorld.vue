<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Loading :visible="showLoading" message="奋力加载中..."></Loading>
    <Dialog :visible="showDialog" title="我是dialog title" @close="closeDialog">
      <div>我是dialog</div>
    </Dialog>
    <Confirm :visible="showConfirm" title="我是confirm title" message="确定这是confirm？">
    </Confirm>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import API from '@/api/server'
  import Component from 'vue-class-component'
  // import Message from './common/message'
  import Dialog from './common/dialog/index.vue'
  import Confirm from './common/confirm/index.vue'
  import Loading from './common/loading/loading.vue'

  @Component({
    props: {
      propMessage: String
    },
    components: {
      Dialog,
      Confirm,
      Loading
    }
  })
  export default class HelloWorld extends Vue {
    // initial data
    private msg: string = 'This is a typescript project now'
    private showDialog: boolean = false
    private showConfirm: boolean = false
    private showLoading: boolean = true

    // lifecycle hook
    private created () {
      const self = this
      setTimeout(() => {
        self.greet()
        this.$message({message: '我是message'})
        self.showLoading = false
        self.showDialog = true
      }, 2000)
    }

    // computed
    get computedMsg () {
      return 'computed ' + this.msg
    }

    // method
    private greet () {
      API.login().then((res: any) => {
        console.log(res)
      })
      // alert('greeting: ' + this.msg)
    }

    private closeDialog () {
      this.showConfirm = true
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

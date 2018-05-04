<template>
  <Dialog
    :visible="value"
    :showCloseIcon="showCloseIcon"
    :title="title"
    size="small"
    :bodyStyle="{padding: '10px 20px'}"
  >
    <div>{{message}}</div>
    <slot slot="header" name="header"></slot>
    <slot slot="footer" name="footer">
      <div slot="footer" class="ys-confirm-footer">
        <Button size="small" @click.native="cancel">{{cancelButtonText}}</Button>
        <Button type="primary" size="small" @click.native="confirm">{{confirmButtonText}}</Button>
      </div>
    </slot>
  </Dialog>
</template>

<script lang="ts">
  import {Vue, Component, Watch, Prop} from 'vue-property-decorator'

  import Dialog from '../dialog/index.vue'
  import Button from '../button/index.vue'

  @Component({
    props: {
      hideOnBlur: {
        type: Boolean,
        default: true
      },
      showCloseIcon: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        require: true
      },
      message: {
        type: String,
        require: true
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      confirmButtonText: {
        type: String,
        default: '确认'
      }
    },
    components: {
      Dialog,
      Button
    }
  })
  export default class Confirm extends Vue {
    @Prop()
    private visible: boolean

    private value: boolean = false
    private created () {
      if (this.visible) {
        this.value = this.visible
      }
    }

    @Watch('visible')
    private onValueChanged (val: boolean) {
      this.value = val
    }
    @Watch('value')
    private onCurrentValueChanged (val: boolean) {
      this.$emit(val ? 'open' : 'close')
    }
    private cancel () {
      this.value = false
      this.$emit('cancel')
    }
    private confirm () {
      this.value = false
      this.$emit('confirm')
    }
  }
</script>

<style lang="scss">
  .ys-confirm-content {
    padding: 10px 15px !important;
  }
  .ys-confirm-footer {
    padding: 5px 15px 10px 15px;
    text-align: right;
    &-confirm {
      margin-left: 10px;
    }
  }
</style>

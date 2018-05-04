<template>
  <div class="ys-dialog">
    <transition :name="maskTransition">
      <div class="ys-dialog-mask" @click="hideOnBlur && (value = false)" v-show="value"></div>
    </transition>
    <div class="ys-dialog-content-wraper" :style="{width: width}" :class="`ys-dialog--${size}`">
      <transition :name="dialogTransition">
        <div class="ys-dialog-content" v-show="value">
          <div class="ys-dialog-close" @click="value = false"
               v-show="showCloseIcon">
          </div>
          <div :class="{'ys-dialog-header': !!title}">
            <slot name="header">{{title}}</slot>
          </div>
          <div class="ys-dialog-body" :style="bodyStyle">
            <slot></slot>
          </div>
          <div class="ys-dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Watch, Prop} from 'vue-property-decorator'

  @Component({
    props: {
      maskTransition: {
        type: String,
        default: 'ys-dialog-mask'
      },
      dialogTransition: {
        type: String,
        default: 'ys-dialog-content'
      },
      hideOnBlur: {
        type: Boolean,
        default: true
      },
      showCloseIcon: {
        type: Boolean,
        default: true
      },
      width: {
        type: String
      },
      title: {
        type: String
      },
      bodyStyle: {
        type: Object
      },
      size: {
        type: String,
        default: 'normal'
      }
      // scroll: {
      //   type: Boolean,
      //   default: true
      // }
    }
  })
  export default class Dialog extends Vue {
    @Prop()
    readonly visible: boolean

    private value: boolean = false

    created() {
      if (this.visible) {
        this.value = this.visible
      }
    }

    @Watch('visible')
    onValueChanged(val: boolean) {
      this.value = val
    }

    @Watch('value')
    onCurrentValueChanged(val: boolean) {
      this.$emit(val ? 'open' : 'close')
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/scss/variable";

  .ys-dialog-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
  }

  .ys-dialog-content-wraper {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    text-align: left;
    max-width: 800px;
  }

  .ys-dialog--large {
    min-width: 250px;
    width: 50%;
  }

  .ys-dialog--normal {
    width: 30%;
    min-width: 560px;
  }

  .ys-dialog--small {
    width: 20%;
    min-width: 420px;
  }

  .ys-dialog-content {
    width: 100%;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    position: relative;
    line-height: 24px;
  }

  .ys-dialog-header {
    padding: 20px 20px 10px 20px;
    font-size: 18px;
  }

  .ys-dialog-body {
    padding: 30px 20px;
    font-size: 14px;
  }

  .ys-dialog-close {
    position: absolute;
    top: 20px;
    right: 20px;
    display: inline-block;
    width: 16px;
    height: 16px;
    overflow: hidden;
    &:hover {
      &::before, &::after {
        background: $text-blue-color;
      }
    }

    &::before, &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: #909399;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
</style>

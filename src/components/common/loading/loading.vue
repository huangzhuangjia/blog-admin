<template>
  <div class="loading" v-show="visible">
    <div class="loading-mask modal" v-show="showModal"></div>
    <div :class="['ys-spinner', {'ys-spinner_is_modal': showModal}]">
      <div class="ys-spinner-animation" :style="spinner_style"></div>
      <div class="ys-spinner-text" :style="text_style" v-if="message.length > 0">{{message}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator'

  @Component
  export default class Loading extends Vue {
    @Prop({default: 32})
    private size: string | number
    @Prop({default: 3})
    private lineSize: string | number
    @Prop({default: 4})
    private spacing: number
    @Prop({default: 13})
    private fontSize: number
    @Prop({default: '#eee'})
    private lineBgColor: string
    @Prop({default: '#2196f3'})
    private lineFgColor: string
    @Prop({default: 0.8})
    private speed: number
    @Prop({default: '#555'})
    private textFgColor: string
    @Prop({default: ''})
    private message: string
    @Prop({default: false})
    private visible: boolean
    @Prop({default: false})
    private showModal: boolean

    get size_px(): number {
      switch (this.size) {
        case 'tiny':
          return 12
        case 'small':
          return 16
        case 'medium':
          return 32
        case 'large':
          return 48
        case 'big':
          return 64
        case 'huge':
          return 96
        case 'massive':
          return 128
      }

      return this.isNumber(this.size) ? Number(this.size) : 32
    }

    get line_size_px(): number {
      switch (this.size) {
        case 'tiny':
          return 1
        case 'small':
          return 2
        case 'medium':
          return 3
        case 'large':
          return 3
        case 'big':
          return 4
        case 'huge':
          return 4
        case 'massive':
          return 5
      }

      return this.isNumber(this.lineSize) ? Number(this.lineSize) : 4
    }

    get text_margin_top(): number {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.size_px / 8), 3), 12)
      }

      return this.isNumber(this.spacing) ? this.spacing : 4
    }

    get text_font_size(): number {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.size_px * 0.4), 11), 32)
      }

      return this.isNumber(this.fontSize) ? this.fontSize : 13
    }

    get spinner_style(): object {
      return {
        'margin': '0 auto',
        'border-radius': '100%',
        'border': this.line_size_px + 'px solid ' + this.lineBgColor,
        'border-top': this.line_size_px + 'px solid ' + this.lineFgColor,
        'width': this.size_px + 'px',
        'height': this.size_px + 'px',
        'animation': 'ys-spinner-spin ' + this.speed + 's linear infinite'
      }
    }

    get text_style(): object {
      return {
        'margin-top': this.text_margin_top + 'px',
        'color': this.showModal ? '#2196f3' : this.textFgColor,
        'font-size': this.text_font_size + 'px',
        'text-align': 'center'
      }
    }

    private isNumber(n: any): boolean {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/scss/variable.scss";

  .modal {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
  }

  .ys-spinner {
    &_is_modal {
      position: fixed;
      top: 200px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1001;
    }
    &-animation {
      transition: all 0.3s linear;
    }
    &-text {
      font-size: $text-s-size;
      font-weight: bold;
    }
  }

  @keyframes ys-spinner-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

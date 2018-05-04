<template>
  <button class="btn" :class="classes" :disabled="disabled" :type="actionType">
    <slot>{{text}}</slot>
  </button>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator'

  @Component({
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        require: true
      },
      actionType: {
        type: String
      }
    }
  })
  export default class Button extends Vue {
    @Prop()
    readonly disabled: boolean
    @Prop()
    readonly type: string
    @Prop()
    readonly size: string

    private btnType: string = 'default'

    created () {
      if (this.type) {
        this.btnType = this.type
      }
    }

    get classes() {
      return [
        {
          'btn--disabled': this.disabled,
          [`btn--${this.size}`]: this.size
        },
        `btn--${this.btnType}`
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/variable";

  .btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid $border-main-color;
    color: $text-secondary-color;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: $button-font-size;
    border-radius: $button-border-radius;
  }

  .btn--small {
    padding: 9px 15px;
    border-radius: $button-border-s-radius;
    font-size: $button-font-s-size;
  }
  .btn--large {
    /*line-height: unit($button-large-border-height/$button-font-size);*/
  }

  .btn--default {
    &:hover {
      background: #b2c2e2;
      color: $primary;
      border-color: $primary;
    }
  }
  .btn {
    &--primary, &--success, &--info, &--warning, &--danger {
      color: #fff;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .btn--primary {
    background-color: $primary;
  }
  .btn--success {
    background-color: $success;
  }
  .btn--info {
    background-color: $info;
  }
  .btn--warning {
    background-color: $warning;
  }
  .btn--danger {
    background-color: $danger;
  }

  .btn[disabled],
  .btn--disabled {
    opacity: 0.5;
  }
</style>

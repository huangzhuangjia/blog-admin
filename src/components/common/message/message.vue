<template>
  <transition name="ys-toast-pop">
    <div class="ys-toast" v-show="visible" :class="customClass"
         :style="{ 'padding': iconClass === '' ? '10px 20px' : '20px' }">
      <i class="ys-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="ys-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'top'
      },
      iconClass: {
        type: String,
        default: ''
      },
      center: {
        type: Boolean,
        default: false
      },
      type: {
        type: String
      }
    },

    data() {
      return {
        visible: false
      }
    },

    computed: {
      customClass() {
        var classes = []
        switch (this.position) {
          case 'top':
            classes.push('is-placetop')
            break
          case 'bottom':
            classes.push('is-placebottom')
            break
          default:
            classes.push('is-placemiddle')
        }
        switch (this.type) {
          case 'success':
            classes.push('ys-toast-success')
            break
          case 'warning':
            classes.push('ys-toast-warning')
            break
          case 'error':
            classes.push('ys-toast-error')
            break
          default:
            classes.push('ys-toast-primary')
        }
        if (this.center) {
          classes.push('is-text-center')
        }
        classes.push(this.className)

        return classes.join(' ')
      }
    }
  }
</script>

<style lang="scss">
  .ys-toast {
    display: table;
    position: fixed;
    min-width: 380px;
    max-width: 90%;
    border: 1px solid;
    border-radius: 5px;
    box-sizing: border-box;
    z-index: 1000;
    transition: opacity .3s linear;

    &-icon {
      display: block;
      text-align: center;
    }

    &-text {
      display: block;
    }

    &.is-text-center {
      text-align: center;
    }
    &.is-placetop {
      top: 20px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &.is-placemiddle {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.is-placebottom {
      bottom: 20px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    &-pop-enter,
    &-pop-leave-active {
      opacity: 0;
    }
  }

  .ys-toast-primary {
    background: #ebeef5;
    border-color: #ebeef5;
    color: #909399;
  }

  .ys-toast-success {
    background: #f0f9eb;
    border-color: #e1f3d8;
    color: #67C23A;
  }

  .ys-toast-warning {
    background: #fdf6ec;
    border-color: #faecd8;
    color: #E6A23C;
  }
  .ys-toast-error {
    background: #fef0f0;
    border-color: #fde2e2;
    color: #f56c6c;
  }
</style>

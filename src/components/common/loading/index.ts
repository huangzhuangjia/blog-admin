import Vue from 'vue'
import loadingVue from './loading.vue'

const loadingConstructor = Vue.extend(loadingVue)

class Loading extends loadingConstructor {
  constructor (options: any) {
    super(options)
  }
  public close () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy()
    }
  }
}

interface IOptions {
  target?: any,
  body?: any,
  size?: string | number,
  lineSize?: string | number,
  spacing?: number,
  fontSize?: number,
  lineBgColor?: string,
  lineFgColor?: string,
  speed?: number,
  textFgColor?: string,
  message?: string
}

const defaultOptions = {target: document.body, message: '奋力加载中...'}

const getInstance = (options: IOptions = defaultOptions) => {
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target)
  }

  const parent = options.body ? document.body : options.target
  let instance: any = new Loading({
    el: document.createElement('div')
  })
  instance = Object.assign(
    instance,
    options,
    {visible: true, showModal: true}
  )

  parent.appendChild(instance.$el)

  return instance
}

export default getInstance

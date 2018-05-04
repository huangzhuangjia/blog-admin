<template>
  <div class="ys-footer">
    <div class="ys-footer-inner">
        <p>
          <template v-for="(item, index) in list">
            <a :href="item.url" target="_blank" rel="nofollow">{{item.name}}</a>
            <span v-if="list.length - 1 !== index">|</span>
          </template>
        </p>
        <p>
          <a href="//yyweb.yystatic.com/pc/images/company/3-30eabb76b3.jpg" target="_blank" rel="nofollow">增值电信业务经营许可证B2-20120219</a>
          <span>|</span>
          <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">粤ICP备09075143号</a>
        </p>
        <p>© 2005-2018 广州华多网络科技有限公司 版权所有 粤公网安备44011302000069号</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'

  interface IList {
    name: string,
    url: string
  }

  @Component
  export default class YFooter extends Vue {
    private list: IList[] = [
      {
        name: '关于欢聚',
        url: 'http://www.huanju.cn/s/introduction.html'
      },
      {
        name: '欢聚招聘',
        url: 'http://hr.yy.com/'
      }, 
      {
        name: '联系欢聚',
        url: 'http://huanju.cn/s/contact.html'
      },
      {
        name: '客服频道：10',
        url: 'http://kf.yy.com/'
      },
      {
        name: 'YY客服中心',
        url: 'http://kf.yy.com/'
      },
      {
        name: '隐私权保护政策',
        url: 'http://www.huanju.cn/1207/m_205349693256.html'
      },
      {
        name: '版权保护投诉指引',
        url: 'http://www.huanju.cn/1207/m_205353486825.html'
      }
    ]
  }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";

.ys-footer {
  width: 100%;
  min-width: 1200px;
  padding-top: 40px;
  background: $footer-bc-color;
  height: $footer-height;
  color: $footer-font-color;
  font-size: $font-size-footer;
  p {
    text-align: center;
    margin: 0 auto 12px;
    span {
      margin: 0 2px;
    }
    a {
      white-space: nowrap;
      &:hover{
        color: $footer-hover-color;
      }
    }
  }
}
</style>
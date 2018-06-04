<template>
  <div class="tags-nav">
    <div class="close-con">
      <Dropdown transfer @on-click="handleTagsOption">
        <Button type="primary" size="small">
          标签选项
          <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem name="close-all">关闭所有</DropdownItem>
          <DropdownItem name="close-others">关闭其他</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="scroll-outer" ref="scrollOuter">
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <transition-group name="taglist-moving-animation">
          <Tag
            type="dot"
            v-for="item in list"
            ref="tagsPageOpened"
            :key="`tag-nav-${item.name}`"
            :name="item.name"
            @on-close="handleClose"
            @click.native="handleClick(item)"
            :closable="item.name==='home' ? false : true"
            :color="item.name === value.name ? 'blue' : 'default'"
          >{{ showTitleInside(item) }}</Tag>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import { showTitle } from '@/config/util'
@Component({
  name: 'tagsNav'
})
export default class TagsNav extends Vue {
  $refs: {
    scrollOuter: HTMLDivElement,
    scrollBody: HTMLDivElement
  }
  private tagBodyLeft: number = 0

  @Prop({ default: {} })
  private value: any
  @Prop({ default: () => [] })
  private list: any[]

  private handlescroll (e: any) {
    var type = e.type
    let delta = 0
    if (type === 'DOMMouseScroll' || type === 'mousewheel') {
      delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
    }
    this.handleScroll(delta)
  }
  private handleScroll (offset: number) {
    if (offset > 0) {
      this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
    } else {
      if (this.$refs.scrollOuter.offsetWidth < this.$refs.scrollBody.offsetWidth) {
        if (this.tagBodyLeft < -(this.$refs.scrollBody.offsetWidth - this.$refs.scrollOuter.offsetWidth)) {
          this.tagBodyLeft = this.tagBodyLeft
        } else {
          this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, this.$refs.scrollOuter.offsetWidth - this.$refs.scrollBody.offsetWidth)
        }
      } else {
        this.tagBodyLeft = 0
      }
    }
  }
  private handleTagsOption (type: string) {
    if (type === 'close-all') {
      // 关闭所有，除了home
      let res = this.list.filter(item => item.name === 'home')
      this.$emit('on-close', res, 'all')
    } else {
      // 关闭除当前页和home页的其他页
      let res = this.list.filter(item => item.name === this.value.name || item.name === 'home')
      this.$emit('on-close', res, 'others')
    }
  }
  private handleClose (e: any, name: string) {
    let res = this.list.filter(item => item.name !== name)
    this.$emit('on-close', res, undefined, name)
  }
  private handleClick (item: StoreState.TagNavList) {
    this.$emit('input', item)
  }
  private showTitleInside (item: StoreState.TagNavList) {
    return showTitle(item, this)
  }
}
</script>

<style lang="less">
@import './tags-nav.less';
</style>

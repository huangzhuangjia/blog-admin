<template>
  <Dropdown @on-click="handleClick" transer placement="right-start">
    <a class="drop-menu-a" type="text" :style="{textAlign: !hideTitle ? 'left' : ''}"><Icon :size="rootIconSize" :color="textColor" :type="parentItem.icon"/><span class="menu-title" v-if="!hideTitle">{{ showTitle(parentItem) }}</span><Icon v-if="!hideTitle" :size="10" :color="textColor" type="chevron-right" style="float: right;margin-top: 4px;"/></a>
    <DropdownMenu slot="list">
      <template v-for="child in children">
        <collapsed-menu v-if="showChildren(child)" :icon-size="iconSize" :parent-item="child" :key="`drop-${child.name}`"></collapsed-menu>
        <DropdownItem v-else :key="`drop-${child.name}`" :name="child.name"><Icon :size="iconSize" :type="child.icon"/><span class="menu-title">{{ showTitle(child) }}</span></DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import mixin from './mixin'
import itemMixin from './item-mixin'
@Component({
  name: 'collapsedMenu',
  mixins: [ mixin, itemMixin ],
  props: {
    hideTitle: {
      type: Boolean,
      default: false
    },
    rootIconSize: {
      type: Number,
      default: 16
    }
  }
})
export default class CollaspedMenu extends Vue {
  private handleClick (name: string): void {
    this.$emit('on-click', name)
  }
}
</script>

<template>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <Icon :type="parentItem.icon"/>
      <span>{{ showTitle(parentItem) }}</span>
    </template>
    <template v-for="item in children">
      <side-menu-item v-if="item.children && item.children.length !== 0" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
      <menu-item v-else :name="`${item.name}`" :key="`menu-${item.name}`"><Icon :type="item.icon"/><span>{{ showTitle(item) }}</span></menu-item>
    </template>
  </Submenu>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import mixin from './mixin'
import itemMixin from './item-mixin'
@Component({
  name: 'sideMenuItem',
  mixins: [ mixin, itemMixin ]
})
export default class SideMenuItem extends Vue {
}
</script>

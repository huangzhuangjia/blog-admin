<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: `${fontSize}px`}">
      <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`"><Icon v-if="showIcon" :type="item.icon" style="margin-right: 4px;" />{{ showTitle(item) }}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { showTitle } from '@/config/util'
import './custom-bread-crumb.less'
@Component({
  name: 'customBreadCrumb'
})
export default class CustomBreadCrumb extends Vue {
  @Prop({ default: () => [] })
  private list: StoreState.BreadCrumbList[]
  @Prop({ default: 14 })
  private fontSize: number
  @Prop({ default: false })
  private showIcon: boolean

  private showTitle (item: StoreState.BreadCrumbList): StoreState.BreadCrumbList {
    return showTitle(item, this)
  }
}
</script>

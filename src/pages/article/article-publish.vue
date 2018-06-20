<template>
    <div>
        <Row>
            <Col span="18">
                <Card>
                    <Form :label-width="80">
                        <FormItem label="文章标题" :error="articleError">
                            <Input v-model="articleTitle" icon="android-list"/>
                        </FormItem>
                    </Form>
                    <div class="margin-top-20">
                        <textarea id="articleEditor"></textarea>
                    </div>
                </Card>
            </Col>
            <Col span="6" class="padding-left-10">
                <Card>
                    <p slot="title">
                        <Icon type="ios-pricetags-outline"></Icon>
                        标签
                    </p>
                    <Row>
                        <Col span="18">
                            <Select v-model="articleTagSelected" multiple @on-change="handleSelectTag" placeholder="请选择文章标签">
                                <Option v-for="item in articleTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                            </Select>
                        </Col>
                        <Col span="6" class="padding-left-10">
                            <Button v-show="!addingNewTag" @click="handleAddNewTag" long type="ghost">新建</Button>
                        </Col>
                    </Row>
                    <transition name="add-new-tag">
                        <div v-show="addingNewTag" class="add-new-tag-con">
                            <Col span="14">
                                <Input v-model="newTagName" placeholder="请输入标签名" />
                            </Col>
                            <Col span="5" class="padding-left-10">
                                <Button @click="createNewTag" long type="primary">确定</Button>
                            </Col>
                            <Col span="5" class="padding-left-10">
                                <Button @click="cancelCreateNewTag" long type="ghost">取消</Button>
                            </Col>
                        </div>
                    </transition>
                </Card>
                <Card class="margin-top-10">
                    <p slot="title">
                        <Icon type="paper-airplane"></Icon>
                        发布
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;状&nbsp;&nbsp;&nbsp;&nbsp;态：
                        <Select size="small" style="width:90px" v-model="articleState">
                            <Option v-for="item in articleStateList" :value="item.value" :key="item.name">{{ item.name }}</Option>
                        </Select>
                    </p>
                    <Row class="margin-top-20 publish-button-con">
                        <span class="publish-button"><Button @click="handleSaveDraft">保存草稿</Button></span>
                        <span class="publish-button"><Button @click="handlePublish" :loading="publishLoading" icon="ios-checkmark" style="width:90px;" type="primary">发布</Button></span>
                    </Row>
                </Card>

            </Col>
        </Row>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import tinymce from '../../../static/tinymce/tinymce.min.js'
import './article-publish.less'
import { success, error } from '../../config/response'
(window as any).tinymce.baseURL = '/static/tinymce'

@Component({
  name: 'artical-publish'
})
export default class ArticalPublish extends Vue {
  private articleTitle: string = ''
  private articleError: string = ''
  private showLink: boolean = false
  private fixedLink: string = ''
  private articlePath: string = ''
  private articlePathHasEdited: boolean = false
  private editLink: boolean = false
  private editPathButtonType: string = 'ghost'
  private editPathButtonText: string = '编辑'
  private articleStateList: any = [{name: '公开', value: 1}, {name: '私密', value: 2}]
  private articleState: number = 1  // 文章状态
  private editOpenness: boolean = false
  private Openness: string = '公开'
  private currentOpenness: string = '公开'
  private topArticle: boolean = false
  private publishTime: string = ''
  private publishTimeType: string = 'immediately'
  private editPublishTime: boolean = false // 是否正在编辑发布时间
  private articleTagSelected: any[] = [] // 文章选中的标签
  private articleTagList: any[] = [] // 所有标签列表
  private classificationList: any[] = []
  private classificationSelected: any[] = [] // 在所有分类目录中选中的目录数组
  private offenUsedClass: any[] = []
  private offenUsedClassSelected: any[] = [] // 常用目录选中的目录
  private classificationFinalSelected: any[] = [] // 最后实际选择的目录
  private publishLoading: boolean = false
  private addingNewTag: boolean = false // 添加新标签
  private newTagName: string = '' // 新建标签名

  private editArticlePath () {
      this.editLink = !this.editLink;
      this.editPathButtonType = this.editPathButtonType === 'ghost' ? 'success' : 'ghost';
      this.editPathButtonText = this.editPathButtonText === '编辑' ? '完成' : '编辑';
  }
  private handleEditOpenness () {
    this.editOpenness = !this.editOpenness;
  }
  private handleSaveOpenness () {
      this.Openness = this.currentOpenness;
      this.editOpenness = false;
  }
  private cancelEditOpenness () {
      this.currentOpenness = this.Openness;
      this.editOpenness = false;
  }
  private handleEditPublishTime () {
      this.editPublishTime = !this.editPublishTime;
  }
  private handleSavePublishTime () {
      this.publishTimeType = 'timing';
      this.editPublishTime = false;
  }
  private cancelEditPublishTime () {
      this.publishTimeType = 'immediately';
      this.editPublishTime = false;
  }
  private handleAddNewTag () {
      this.addingNewTag = !this.addingNewTag;
  }
  private createNewTag () {
      if (this.newTagName.length !== 0) {
          this.articleTagList.push({value: this.newTagName});
          this.addingNewTag = false;
          setTimeout(() => {
              this.newTagName = '';
          }, 200);
      } else {
          error('请输入标签名');
      }
  }
  private cancelCreateNewTag () {
      this.newTagName = '';
      this.addingNewTag = false;
  }
  private canPublish () {
      if (this.articleTitle.length === 0) {
          error('请输入文章标题');
          return false;
      } else if (tinymce.activeEditor.getContent().length === 0) {
          error('请输入文章内容')
      } else {
          return true;
      }
  }
  private handleSaveDraft () {
      if (!this.canPublish()) {
          //
      }
  }
  private async handlePublish () {
      if (this.canPublish()) {
          const res = await this.$store.dispatch('postArt', {
            title: this.articleTitle,
            content: tinymce.activeEditor.getContent(),
            state: 1,
            publish: this.articleState
          })
          this.publishLoading = this.$store.state.article.posting
      }
  }
  private handleSelectTag () {
      localStorage.tagsList = JSON.stringify(this.articleTagSelected); // 本地存储文章标签列表
  }
  private mounted () {
      this.articleTagList = [
          {value: 'vue'},
          {value: 'iview'},
          {value: 'ES6'},
          {value: 'webpack'},
          {value: 'babel'},
          {value: 'eslint'}
      ];

      tinymce.init({
          selector: '#articleEditor',
          branding: false,
          elementpath: false,
          height: 600,
          language: 'zh_CN',
          menubar: 'edit insert view format table tools',
          theme: 'modern',
          plugins: [
              'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
              'searchreplace visualblocks visualchars code fullscreen fullpage',
              'insertdatetime media nonbreaking save table contextmenu directionality',
              'emoticons paste textcolor colorpicker textpattern imagetools codesample'
          ],
          toolbar1: ' newnote print fullscreen preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
          autosave_interval: '20s',
          image_advtab: true,
          table_default_styles: {
              width: '100%',
              borderCollapse: 'collapse'
          }
      })
  }
  private destroyed () {
    tinymce.get('articleEditor').destroy();
  }
}
</script>

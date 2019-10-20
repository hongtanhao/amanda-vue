<template>
  <div class="container">
    <ama-loader v-if="isShowLoader"></ama-loader>
    <ama-row>
      <ama-col offset="2" span="3.5" align="left">
        <div class="side-nav">
          <ama-navigator>
            <ama-nav-container v-for="(item, index) in sideNavs"
              :key="index"
              :item="item"
              orientation="vertical"
              @amaNavItemClick="handleClick(item)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ama-a href="#" :text="item.alias"></ama-a>
            </ama-nav-container>
          </ama-navigator>
        </div>
      </ama-col>
      <ama-col span="15" align="left">
        <div style="margin: 0 2rem; verticalAlign: center" class="side-nav" ref="ama-com">
          <ama-scroller height="800" scroll="Y" >
            <ama-row>
              <ama-col span="24" align="right">
                <ama-tabs @amaTabsClicked="toggle" :tabs="tabs"></ama-tabs>
              </ama-col>
            </ama-row>
            <ama-divider bgColor="#ccc" width="100%" type='line'></ama-divider>
            <div v-show="mode === 'demo'" style="padding: 2rem">
              <component ref="mycom" :is="currentCom"></component>
            </div>
            <pre id="editor" v-show="mode === 'code'" ref="code">
            </pre>
          </ama-scroller>
        </div>
      </ama-col>
      <ama-col span="2" align="left">
        tag
      </ama-col>
    </ama-row>
  </div>
</template>
<script>
import SideNavs from '@/components/amas'
import readme from './readme'
import RequestHelper from '@/utils/request-helper'
export default {
  name: 'container',
  data () {
    return {
      sideNavs: SideNavs,
      currentCom: readme,
      content: '',
      html: '',
      mode: 'demo',
      doc: '',
      selectedCom: 'readme',
      isShowLoader: true,
      tabs: [{
        id: '1',
        text: '示例效果'
      }, {
        id: '2',
        text: '示例源码'
      }]
    }
  },
  watch: {
  },
  async created () {
    this.sideNavs.sort((a, b) => {
      if (a.alias.charAt(0).toLowerCase() < b.alias.charAt(0).toLowerCase()) {
        return -1
      } else {
        return 1
      }
    })
    this.getDoc(this.selectedCom)
  },
  mounted () {
  },
  methods: {
    async getDoc (comN) {
      this.isShowLoader = true
      let RQ = RequestHelper(this)
      try {
        this.doc = await RQ.get('/amasVuFile/read', {comN: comN})
      } catch (error) {
        this.isShowLoader = false
        return
      }
      setTimeout(() => {
        this.isShowLoader = false
      }, 500)
      console.log('this.doc===', this.doc)
    },
    async handleClick (nav) {
      this.currentCom = nav.component.default
      this.selectedCom = nav.comName
      await this.getDoc(this.selectedCom)
      this.$nextTick(() => {
        this.setValue()
      })
    },
    setTextToCurrentCompo (value) {
      let domC = this.$refs['mycom']
      console.log('domC===', domC)
      domC.$el.innerHTML = value
    },
    toggle (item) {
      if (item.id === '1') {
        this.getValue()
        // this.setTextToCurrentCompo(value)
        this.mode = 'demo'
      } else if (item.id === '2') {
        this.setValue()
        this.mode = 'code'
      } else {
        this.mode = ''
      }
    },
    setValue () {
      var el = document.getElementById('editor')
      el.env && el.env.editor.setValue(this.doc.data, 1)
    },
    getValue () {
      var el = document.getElementById('editor')
      return el.env && el.env.editor.getValue()
    }
  }
}
</script>
<style lang="scss" scoped>
.side-nav {
  border-right: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem .5rem;
  background-color:transparent;
}

#editor {
  // position: absolute;
  width: 100%;
  height: 100%;
}
</style>

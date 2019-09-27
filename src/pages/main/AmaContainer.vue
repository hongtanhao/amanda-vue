<template>
  <div class="container">
      <ama-row>
        <ama-col offset="2" span="4" align="left">
          <div class="side-nav">
            <ama-navigator>
              <ama-nav-item v-for="(item, index) in sideNavs"
                :key="index"
                :item="item"
                orientation="vertical"
                @amaNavItemClick="handleClick(item)">
                <ama-a href="#" :text="item.comName"></ama-a>
              </ama-nav-item>
            </ama-navigator>
          </div>
        </ama-col>
        <ama-col span="14" align="left">
          <div style="margin: 0 2rem; verticalAlign: center" class="side-nav" ref="ama-com">
            <ama-scroller height="800" scroll="Y" >
              <ama-row>
                <ama-col offset="8" span="4" align="right">
                  <ama-tabs @amaTabsClicked="toggle" :tabs="tabs"></ama-tabs>
                </ama-col>
              </ama-row>
              <ama-divider color="#ccc" width="100%" type='line'></ama-divider>
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
    this.getDoc(this.selectedCom)
  },
  mounted () {
  },
  methods: {
    async getDoc (comN) {
      let RQ = RequestHelper(this)
      this.doc = await RQ.get('/amasVuFile/read', {comN: comN})
      console.log('this.doc===', this.doc)
    },
    handleClick (nav) {
      this.currentCom = nav.component.default
      this.selectedCom = nav.comName
      this.getDoc(this.selectedCom)
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
  border: 1px solid #ccc;
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

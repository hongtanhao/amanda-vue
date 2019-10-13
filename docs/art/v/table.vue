<template>
  <div>
    <header>
      <h3>table 格式化表格</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>
      <ama-row>
        <ama-col span="23" align="right">
          <ama-button fill="green" @amaButtonClicked="downExcel">saveToExcel</ama-button>
        </ama-col>
      </ama-row>
      <ama-table ref="ama-table" :tdata="tdata"/>
    </section>
    <section>
      <h4 class="opt-h4">See your show</h4>
      <h4>用途</h4>
      <p>
        具有格式化功能性的表格
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8082/amanda-vue-docs/art/m/table.html" text="戳这啊"></ama-a>
      </P>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/table/index.js" text="<ama-table>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
import Vue from 'vue'
import tableHead from "./table-head.json"
import RequestHelper from '@/utils/request-helper'
import { parseTime } from '@/utils/'
export default {
  name: '',
  data () {
    return {
      tdata: {
        config: {
          textAlign: 'center', // 表头文本排列样式
          trHeight: '40', // 行高
          style: 'normal', // 表格风格
          thHeight: '40',
          twidth: '200%',
          theight: '500',
          isWithSorter: true,
          perPageCount: 8,
          sorterPos: 'right'
        },
        metaData: {
          thead: tableHead,
          trows: [] // 生产中通过接口拿（即查询数据库中记录）
        }
      },
      isLoading: false
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    this.getArts()
  },
  methods: {
    async getArts () {
      let result
      let {trows} = this.tdata.metaData
      let RQ = RequestHelper(this)
      try {
        result = await RQ.get('/amasVuFile/getArts')
      } catch (error) {
        console.error("error==", trows)
        return
      }
      this.tdata.metaData.trows = result.data
      console.log("tdata==", this.tdata)
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getOption () {
      const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
      const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
      const list = this.tdata.metaData.trows
      const data = this.formatJson(filterVal, list)
      return {
        header: tHeader,
        data,
        filename: 'ama-table',
        autoWidth: true,
        bookType: 'xlsx'
      }
    },
    downExcel () {
      console.log('vue=====', Vue.directive('loading'))
      this.isLoading = true
      this.$refs['ama-table'].saveToExcel(this.getOption())
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

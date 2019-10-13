<template>
  <div>
    <header>
      <h3>table 格式化表格</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>
      <ama-table :tdata="tdata"/>
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
import tableHead from "./table-head.json"
import RequestHelper from '@/utils/request-helper'
export default {
  name: '',
  data () {
    return {
      tdata: {
        config: {
          textAlign: 'center', // 表头文本排列样式
          rowHeight: '40', // 行高
          style: 'normal', // 表格风格
          thHeight: '40'
        },
        metaData: {
          thead: tableHead,
          trows: [] // 生产中通过接口拿（即查询数据库中记录）
        }
      }
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
      let {trows} = this.tdata.metaData
      try {
        trows = await RQ.get('/amasVuFile/getArts')
        console.log("trows==", trows)
      } catch (error) {
        return
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

import create from '@/utils/create'
export default function () {
  create('ama-table', {
    name: 'ama-table',
    template: `<div>
                <table ref="ama-table" class="ama-table">
                  <thead ref="ama-thead">
                    <th v-for="(head, index) in thead" :key="head+index">{{head.text}}</th>
                  </thead>
                  <tbody>
                    <tr ref="ama-tr" class="ama-table-tr" v-for="(row, index) in trows" :key="index">
                      <td v-for="(head, index) in thead" :key="index+head">{{row[head.mapToColKey]}}</td>
                    </tr>
                  </tbody>
                </table>
                <div v-if="config.isWithSorter" class="ama-table-sorter-wrap" style="position: relative">
                  <div ref="ama-table-sorter">
                    <span class="ama-table-sorter-btn" @click="onPrevPage">上一页</span>or
                    <span class="ama-table-sorter-btn" @click="onNextPage">下一页</span>
                    <span>跳到第</span>
                    <span>
                      <input style="width: 40px; height:25px;" type="number" v-model="curPageCode" name="" id="" @blur="onCurPage">
                      </span>
                    <span>页</span>
                  </div>
                </div>
              </div>`,
    props: {
      tdata: {
        type: Object
      }
    },
    data () {
      return {
        config: this.tdata.config,
        thead: this.tdata.metaData.thead,
        trowsCopy: null,
        trows: [],
        curPageCode: 1
      }
    },
    mounted () {
      let table = this.$refs['ama-table']
      let thead = this.$refs['ama-thead']
      let st = this.$refs['ama-table-sorter']
      table.style.width = this.config.twidth
      table.style.height = this.config.theight + 'px'
      table.style.textAlign = this.config.textAlign
      thead.style.lineHeight = this.config.thHeight + 'px'
      st.style.position = 'absolute'
      if (this.config.sorterPos === 'right') {
        st.style.right = '1rem'
      } else if (this.config.sorterPos === 'left') {
        st.style.left = '1rem'
      } else {
        st.style.left = '50%'
        st.style.transform = 'translate(-50%, 0)'
      }
      this.$nextTick(() => {
        this.dispatchDataForPerPage(this.curPageCode)
      })
    },
    watch: {
      tdata: {
        deep: true,
        handler (val, oldVal) {
          this.trows = val.metaData.trows
          this.dispatchDataForPerPage(1)
        }
      }
    },
    methods: {
      onPrevPage () {
        if (this.curPageCode <= 1) {
          this.curPageCode = 1
          return
        }
        this.curPageCode--
        this.$nextTick(() => {
          this.dispatchDataForPerPage(this.curPageCode)
        })
      },
      onNextPage () {
        let { trows } = this.tdata.metaData
        let { perPageCount } = this.config
        let totalPages = Math.ceil(trows.length / perPageCount)
        if (this.curPageCode >= totalPages) {
          this.curPageCode = totalPages
          return
        }
        this.curPageCode++
        this.$nextTick(() => {
          this.dispatchDataForPerPage(this.curPageCode)
        })
      },
      onCurPage () {
        this.$nextTick(() => {
          this.dispatchDataForPerPage(this.curPageCode)
        })
      },
      dispatchDataForPerPage (pageCode) {
        let { trows } = this.tdata.metaData
        let { perPageCount } = this.config
        this.trows = trows.slice(perPageCount * (pageCode - 1), perPageCount * pageCode)
      },
      // 将当前页的表格数据保存为excel
      saveToExcel (options) {
        import('@/vendor/Export2Excel').then(excel => {
          excel.export_json_to_excel(options)
        })
      }
    }
  })
}

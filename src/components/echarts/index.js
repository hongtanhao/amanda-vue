import create from '@/utils/create'
export default function () {
  create('ama-echarts', {
    name: 'ama-echarts',
    template: '<div ref="ama-echarts"></div>',
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    data () {
      return {
        echart: null
      }
    },
    computed: {
    },
    mounted () {
      let dom = this.$refs['ama-echarts']
      let h = this.height / 1 > 1 ? this.height + 'px' : this.height
      let w = this.width / 1 > 1 ? this.width + 'px' : this.width
      dom.style.height = h
      dom.style.width = w
      dom.setAttribute('id', this.id)
      dom.setAttribute('class', this.className)
      this.initEcharts()
    },
    methods: {
      initEcharts () {
        let dom = this.$refs['ama-echarts']
        // eslint-disable-next-line
        this.echart = echarts.init(dom)
      },
      setOption (options) {
        this.echart.setOption(options)
      }
    },
    beforeDestroy () {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    }
  })
}

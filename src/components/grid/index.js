import create from '@/utils/create'
import { winClientWidth } from '@/utils'
export default function () {
  // 行
  create('ama-row', {
    template: `<div style="width: ${winClientWidth};fontSize: 0;"><slot/></slot></div>`
  })
  // 列
  create('ama-col', {
    template: '<div class="ama-col-base" ref="ama-col"><slot></slot></div>',
    props: {
      span: {
        type: String
      },
      align: {
        type: String
      },
      offset: {
        type: String,
        default: '0'
      }
    },
    mounted () {
      this.$refs['ama-col'].style.width = this._width + 'px'
      this.$refs['ama-col'].style.paddingLeft = this._offset + 'px'
      this.$refs['ama-col'].style.textAlign = this.align
      this.$refs['ama-col'].style.verticalAlign = 'top'
    },
    computed: {
      _width: {
        get: function () {
          return this.span * (1 / 24) * winClientWidth
        }
      },
      _offset () {
        return this.offset * (1 / 24) * winClientWidth
      }
    },
    methods: {
    }
  })
}

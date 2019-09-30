import create from '@/utils/create'
export default function () {
  // 行
  create('ama-row', {
    template: `<div style="width: 100%;fontSize: 0;"><slot></slot></div>`
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
      this.$refs['ama-col'].style.width = this._width + '%'
      this.$refs['ama-col'].style.paddingLeft = this._offset + '%'
      this.$refs['ama-col'].style.textAlign = this.align
      this.$refs['ama-col'].style.verticalAlign = 'top'
    },
    computed: {
      _width: {
        get: function () {
          return this.span * (100 / 24)
        }
      },
      _offset () {
        return this.offset * (100 / 24)
      }
    },
    methods: {
    }
  })
}

import create from '@/utils/create'
export default function () {
  create('ama-divider', {
    name: 'ama-divider',
    template: '<div :class="amaDivider" ref="ama-divider"></div>',
    props: {
      type: {
        type: String
      },
      width: {
        type: String
      },
      height: {
        type: String
      },
      bgColor: {
        type: String
      }
    },
    computed: {
      amaDivider () {
        return this.type === 'line' ? 'ama-divider-line' : 'ama-divider-bar'
      }
    },
    mounted () {
      let {height, width, bgColor} = this
      let curEle = this.$refs['ama-divider']
      curEle.style.backgroundColor = bgColor
      curEle.style.width = width > 1 ? (width + 'px') : width
      curEle.style.height = height + 'px'
    }
  })
}

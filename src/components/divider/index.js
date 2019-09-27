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
      color: {
        type: String
      }
    },
    computed: {
      amaDivider () {
        return this.type === 'line' ? 'ama-divider-line' : 'ama-divider-bar'
      }
    },
    mounted () {
      let {height, width, color} = this
      let curEle = this.$refs['ama-divider']
      curEle.style.backgroundColor = color
      curEle.style.width = width
      curEle.style.height = height + 'px'
    }
  })
}

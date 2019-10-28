import create from '@/utils/create'
export default function () {
  create('ama-nav-container', {
    name: 'ama-nav-container',
    template: '<div :class="amaItem" ref="ama-nav-item" @mouseover="handleHover" @click="handleClick"><slot></slot></div>',
    props: {
      item: {
        type: Object,
        default: {}
      },
      orientation: {
        type: String,
        default: 'horizontal'
      }
    },
    mounted () {
    },
    computed: {
      amaItem () {
        return this.orientation === 'horizontal' ? 'ama-item ama-item-horizontal' : 'ama-item ama-item-vertical'
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('amaNavItemClick', this.item.id)
      },
      handleHover (e) {
        if (this.orientation === 'vertical') {
          let item = this.$refs['ama-nav-item']
          let domItem = [...document.getElementsByClassName('ama-item')]
          for (let i = 0; i < domItem.length; i++) {
            domItem[i].style.backgroundColor = ''
            domItem[i].style.color = '#2c3e50'
            domItem[i].style.border = 'none'
          }
          item.style.boxSize = 'border'
          item.style.color = 'purple !important'
          item.style.backgroundColor = 'hsla(177, 88%, 27%, 0.2)'
          item.style.borderLeft = '8px solid hsla(177, 88%, 27%, 1)'
        }
      }
    }
  })
}

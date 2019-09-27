import create from '@/utils/create'
export default function () {
  create('ama-nav-item', {
    name: 'ama-nav-item',
    template: '<div :class="amaItem" ref="ama-nav-item" @click="handleClick"><slot></slot></div>',
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
        console.log('e', e.target)
        let domA = [...document.getElementsByClassName('ama-a')]
        for (let i = 0; i < domA.length; i++) {
          domA[i].style.color = '#2c3e50'
        }
        e.target.style.color = 'red'
        console.log('[clicked current Item is]', this.item)
        this.$emit('amaNavItemClick', this.item.id)
      }
    }
  })
}

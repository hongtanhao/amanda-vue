import create from '@/utils/create'
export default function () {
  create('ama-icon-svg', {
    name: 'ama-icon-svg',
    props: {
      iconClass: {
        type: String,
        required: true
      }
    },
    computed: {
      iconName () {
        return `#icon-${this.iconClass}`
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('amaIconSvgClick', e)
      }
    },
    template: `<svg @click="handleClick($event)" class="ama-icon-svg" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>`
  })
}

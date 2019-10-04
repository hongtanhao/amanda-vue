import create from '@/utils/create'
export default function () {
  create('ama-button', {
    name: 'ama-button',
    template: '<button @click="handleClick" class="ama-button" :disabled="disabled" ref="ama-button"><slot></slot></button>',
    props: {
      disabled: {
        type: Boolean
      },
      fill: {
        type: String
      }
    },
    computed: {
    },
    mounted () {
      let dom = this.$refs['ama-button']
      dom.style.backgroundColor = this.fill
      if (this.disabled) {
        dom.style.backgroundColor = '#ccc'
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('amaButtonClicked', e)
      }
    }
  })
}

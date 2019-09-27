import create from '@/utils/create'
export default function () {
  create('ama-button', {
    name: 'ama-button',
    template: '<button @click="handleClick" class="ama-button" :disable="disable" ref="ama-divider"><slot></slot></button>',
    props: {
      disable: {
        type: String
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
      handleClick (e) {
        this.$emit('amaButtonClicked', e)
      }
    }
  })
}

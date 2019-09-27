import create from '@/utils/create'
export default function () {
  create('ama-scroller', {
    name: 'ama-scroller',
    template: '<div :class="amaScroller" ref="ama-scroller"><slot></slot></div>',
    props: {
      height: {
        type: String,
        required: true
      },
      scroll: {
        type: String
      }
    },
    mounted () {
      this.$refs['ama-scroller'].style.height = this.height + 'px'
    },
    computed: {
      amaScroller () {
        let str = 'ama-scroller'
        if (this.scroll) {
          if (this.scroll === 'X') {
            str = 'ama-scroller-x'
          } else if (this.scroll === 'Y') {
            str = 'ama-scroller-y'
          } else {
            return str
          }
        }
        return str
      }
    },
    methods: {
    }
  })
}

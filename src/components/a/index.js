import create from '@/utils/create'
export default function () {
  create('ama-a', {
    name: 'ama-a',
    template: '<span><a class="ama-a" ref="ama-a">{{ text }}</a></span>',
    props: {
      href: {
        type: String
      },
      text: {
        type: String,
        required: true
      }
    },
    mounted () {
      if (this.href) {
        this.$refs['ama-a'].href = this.href
      }
    }
  })
}

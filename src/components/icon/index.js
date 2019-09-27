import create from '@/utils/create'
export default function () {
  create('ama-icon', {
    name: 'ama-icon',
    template: '<span ref="ama-icon-span"><ama-a :href="iconC.url" :text="iconC.text"></ama-a></span>',
    props: {
      icon: {
        type: Object
      }
    },
    data () {
      return {
        iconC: this.icon
      }
    },
    watch: {
      iconC: {
        deep: true,
        handler: function (val, old) {
          this.$refs['ama-icon-span'].style.color = val.activateColor ? val.activateColor : val.color
        }
      }
    },
    mounted () {
    },
    methods: {
    }
  })
}

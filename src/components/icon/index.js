import create from '@/utils/create'
export default function () {
  create('ama-icon', {
    name: 'ama-icon',
    template: `<a class="ama-a" ref="icon-a"> 
                <span ref="ama-icon-span" @click="handleClicked">
                  <span :class="iconClass" ref="ama-icon">{{ icon.fontClass ? "" : icon.unicode }}</span>
                </span>
              </a>`,
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
    computed: {
      iconClass () {
        if (this.icon.fontClass) {
          return 'ama-icon iconfont ' + this.icon.fontClass
        } else if (this.icon.unicode) {
          return 'iconfont'
        } else {
          return ''
        }
      }
    },
    mounted () {
      this.$refs['ama-icon'].style.fontSize = this.iconC.size
      this.$refs['icon-a'].href = this.iconC.url
    },
    watch: {
      iconC: {
        deep: true,
        handler: function (val, old) {
          this.$refs['ama-icon-span'].style.color = val.activateColor ? val.activateColor : val.color
        }
      }
    },
    methods: {
      handleClicked () {
        Window.open(this.icon.href)
      }
    }
  })
}

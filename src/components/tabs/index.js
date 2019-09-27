import create from '@/utils/create'
export default function () {
  create('ama-tabs', {
    name: 'ama-tabs',
    template: `<div class="ama-tabs" ref="ama-tabs">
                <span v-for="(item, index) in tabs" 
                  :class="item.id === actived ? 'ama-tabs-activated' : ''" 
                  :key="index"
                  @click="handleClick(item)">
                  {{item.text}}
                </span>
              </div>`,
    props: {
      tabs: {
        type: Array
      }
    },
    data () {
      return {
        actived: this.tabs[0].id
      }
    },
    mounted () {
      this.handleClick(this.tabs[0])
    },
    computed: {
    },
    methods: {
      handleClick (item) {
        this.actived = item.id
        this.$emit('amaTabsClicked', item)
      }
    }
  })
}

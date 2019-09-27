<template>
  <div>
   <ama-row class="GRskin">
      <ama-col offset="2" span="10" align="left">
        <ama-logo :wsInfo="wsInfo"></ama-logo>
      </ama-col>
      <ama-col span="11" align="right">
        <ama-navigator>
          <ama-nav-item v-for="(item, index) in navs"
            :key="index"
            :item="item"
            orientation="horizontal"
            @amaNavItemClick="handleClick">
            <ama-divider width="100%" height="20" type='block'></ama-divider>
            <ama-icon :icon="item.icon"></ama-icon>
          </ama-nav-item>
        </ama-navigator>
      </ama-col>
   </ama-row>
  </div>
</template>
<script>
import AmaLogo from './AmaLogo.vue'
import Navs from './nav.json'
import colour from '@/amaConfig/colour.json'
export default {
  name: 'AmaHeader',
  data () {
    return {
      wsInfo: 'AmandaVue',
      navs: Navs
    }
  },
  components: {
    AmaLogo
  },
  computed: {
  },
  methods: {
    handleClick (curId) {
      this.navs = this.navs.map(item => {
        if (item.id === curId) {
          item.icon.activateColor = colour['deep_red']
        } else {
          item.icon.activateColor = ''
        }
        return item
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.GRskin {
  background-color: $GRbackgroundColor;
  line-height: $HeaderH;
}
</style>

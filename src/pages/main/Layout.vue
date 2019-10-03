<template>
  <div>
    <ama-header/>
    <ama-divider :bgColor="color" width="100%" type='line'></ama-divider>
    <ama-divider width="100%" height="40" type='block'></ama-divider>
    <ama-container></ama-container>
    <ama-divider width="100%" height="10" type='block'></ama-divider>
    <ama-footer></ama-footer>
  </div>
</template>
<script>
import AmaHeader from './AmaHeader'
import AmaContainer from './AmaContainer'
import AmaFooter from './AmaFooter'
import Colour from '@/amaConfig/colour.json'
export default {
  name: 'layout',
  data () {
    return {
      color: Colour['gray_level4']
    }
  },
  components: {
    AmaHeader,
    AmaContainer,
    AmaFooter
  }
}
</script>

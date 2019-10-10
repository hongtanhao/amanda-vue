<template>
  <transition name="fade">
    <div class="wc-toast" v-if="show">
      <div v-if="type==='success'" class="wc-toast-message success">
        {{message}}
      </div>
    </div>
  </transition>
</template>
<script>
import pageChange from '@/mixins'
export default {
  mixins: [pageChange],
  data () {
    return {
      show: false,
      message: '',
      duration: 1500,
      type: ''
    }
  }
}
</script>
<style scoped lang="scss">
.fade-enter {
  opacity: 0
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s
}

.fade-leave-active {
  opacity: 0;
}

.success {
  border-left: 8px solid green;
  color: green;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  background-color: rgba(0, 0, 0, .1);
  padding-left: 1rem;
}
</style>

<template>
  <div class="logo">
    <img :src="logo" alt="logo"/>
    <ama-a href="https://github.com/hongtanhao/amanda-vue" :text="wbCName"></ama-a>
  </div>
</template>
<script>
export default {
  name: 'logo',
  props: {
    wsInfo: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      logo: 'static/images/logo.svg',
      wbCName: 'AmandaVue'
    }
  },
  componests: {
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.logo >img {
  width: 30px;
  position: relative;
  top: 8px;
}
.logo > span {
  padding-left: 1rem;
  line-height: $HeaderH;
  height: $HeaderH;
  display: inline-block;
}
</style>

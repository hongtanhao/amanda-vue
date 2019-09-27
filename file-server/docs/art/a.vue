<template>
  <div>
    <h2>a</h2>
    <p>超链接组件</p>
    <p>在vue单个文件中使用</P>
    <p>效果如下</P>
    <ama-a :href="href" :text="blog"></ama-a>
  </div>
</template>
<script>
export default {
  name: 'a-demo',
  data () {
    return {
      blog: '个人博客',
      href: 'https://hongtanhao.github.io/'
    }
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
</style>

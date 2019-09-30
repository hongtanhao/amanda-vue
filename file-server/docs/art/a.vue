<template>
  <div>
    <header>
      <h3>a 链接</h3>
      <br>
    </header>
    <section>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/a1.html" text="戳这啊"></ama-a>
      </P>
      <h4>效果如下</h4>
      <p>有链接态</p>
      <ul>
        <li v-for="(item, index) in blogs" :key="index">
          <ama-a :href="item.href" :text="item.blog +(index+1)"></ama-a>
        </li>
      </ul>
       <p>无链接态</p>
      <ul>
        <li v-for="(item, index) in blogs" :key="index">
          <ama-a :text="item.blog +(index+1)"></ama-a>
        </li>
      </ul>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/a/index.js" text="<ama-a>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
export default {
  name: 'a-demo',
  data () {
    return {
      blogs: [
        { 
          blog: '个人博客',
          href: 'https://hongtanhao.github.io/'
        },
        { 
          blog: '个人博客',
          href: 'https://hongtanhao.github.io/'
        },
        { 
          blog: '个人博客',
          href: 'https://hongtanhao.github.io/'
        }
      ]
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

<template>
  <div>
    <header>
      <h3>icon 具有链接效果的小图标</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>
      <ul class="icon-ul">
        <p>1. 以class方式使用</p>
        <li v-for="(item, index) in fontClass" :key="index">
          <ama-icon :icon="item.icon"></ama-icon>
        </li>
      </ul>
      <ul class="icon-ul">
        <p>2. 以unicode方式使用</p>
        <li v-for="(item2, index2) in unicodes" :key="index2">
          <ama-icon :icon="item2.icon"></ama-icon>
        </li>
      </ul>
    </section>
    <section>
      <h4 class="opt-h4">See your show</h4>
      <h4>需知</h4>
      <p>
        本组件引用了阿里巴巴的<ama-a href="https://www.iconfont.cn/" text="iconfont"></ama-a>， 然后加以封装
      </P>
      <p>
        本组件库目前仅仅支持<ama-a href="/staic/font/demo_index.html" text="该页面"></ama-a>中所罗列的iconfont
      </p>
      <h4>用途</h4>
      <p>页面icon, 并且带链接功能</p>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/m/icon.html" text="戳这啊"></ama-a>
      </P>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/icon/index.js" text="<ama-icon>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
export default {
  name: 'a-demo',
  data () {
    return {
      fontClass: [
        { 
          id: "1",
          icon: {
            text: "Blog",
            color: "",
            activateColor: "#",
            url: "",
            size: "1.5rem",
            fontClass: "icon-icon-test12",
            unicode: ""
          }
        },
        {
          id: "2",
          icon: {
            text: "Github",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "icon-icon-test76",
            unicode: ""
          }
        },
        {
          id: "3",
          icon: {
            text: "Setting",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "icon-icon-test15",
            unicode: ""
          }
        },
        {
          id: "4",
          icon: {
            text: "Setting",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "icon-icon-test16",
            unicode: ""
          }
        },
        {
          id: "5",
          icon: {
            text: "Setting",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "icon-icon-test17",
            unicode: ""
          }
        },
        {
          id: "6",
          icon: {
            text: "Setting",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "icon-icon-test170",
            unicode: ""
          }
        }
      ],
      unicodes: [
        { 
          id: "1",
          icon: {
            text: "Blog",
            color: "",
            activateColor: "#",
            url: "",
            size: "1.5rem",
            fontClass: "",
            unicode: "&#xe63f;"
          }
        },
        {
          id: "2",
          icon: {
            text: "Github",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "",
            unicode: "&#xe67f;"
          }
        },
        {
          id: "3",
          icon: {
            text: "Setting",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "",
            unicode: "&#xe642;"
          }
        },
        {
          id: "4",
          icon: {
            text: "Setting",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "",
            unicode: "&#xe642;"
          }
        },
        {
          id: "5",
          icon: {
            text: "Setting",
            color: "",
            activateColor: "",
            url: "",
            size: "1.5rem",
            fontClass: "",
            unicode: "&#xe642;"
          }
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
.icon-ul {
}
.icon-ul > li {
  display: inline-block;
  margin: 1rem;
}
</style>

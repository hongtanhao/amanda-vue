<template>
  <div>
    <header>
      <h3>svg 雪碧图</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>
      <ama-row>
        <ama-col v-for="(item, index) in svgs" :key="index+item" span="4" align="center">
          <div @click="handleClipboard(generateIconCode(item), $event)">
            <ama-icon-svg :iconClass="item" ></ama-icon-svg>
          </div>
          <span>{{item}}</span>
        </ama-col>
      </ama-row>
    </section>
    <section>
       <h4 class="opt-h4">See your show</h4>
      <h4>需知</h4>
      <p>
        请先阅读<ama-a href="https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/?spm=a313x.7781069.1998910419.50" text="未来必热：SVG Sprites技术介绍"></ama-a>， 然后加以封装
      </P>
      <h4>用途</h4>
      <p>页面icon</p>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/m/icon-svg.html" text="戳这啊"></ama-a>
      </P>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/icon/index.js" text="<ama-icon-svg>组件源码"></ama-a>
      </P>
      <div v-loading="isLoading">hello</div>
    </section>
  </div>
</template>
<script>
import "@/icons/svg/bug.svg"
import "@/icons/svg/chart.svg"
import "@/icons/svg/clipboard.svg"
import "@/icons/svg/dashboard.svg"
import "@/icons/svg/drag.svg"
import "@/icons/svg/edit.svg"
import "@/icons/svg/email.svg"
import "@/icons/svg/education.svg"
import "@/icons/svg/eye.svg"
import "@/icons/svg/form.svg"
import "@/icons/svg/guide.svg"
import "@/icons/svg/lock.svg"
import clipboard from '@/utils/clipboard'
export default {
  name: 'a-demo',
  data () {
    return {
      svgs: ['bug', 'chart', 'clipboard', 'dashboard', 'drag', 'edit',
      'email', 'education', 'eye', 'form', 'guide', 'lock'],
      message: 'demo',
      isLoading: true
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    setTimeout(() => {
      this.message = ''
      this.isLoading = false
    }, 5000);
  },
  directives: {
    'demo': {
      bind(el, binding, vnode) {
        var s = JSON.stringify
        // el.innerHTML =
        //   'name: '       + s(binding.name) + '<br>' +
        //   'value: '      + s(binding.value) + '<br>' +
        //   'expression: ' + s(binding.expression) + '<br>' +
        //   'argument: '   + s(binding.arg) + '<br>' +
        //   'modifiers: '  + s(binding.modifiers) + '<br>' +
        //   'vnode keys: ' + Object.keys(vnode).join(', ')
        let value = el.textContent
        console.log('binding.value', binding.value)
        if (binding.value === 'demo') {
          el.innerHTML = 'dem1'
        } else {
          el.innerHTML = 'dem2'
        }
      },
      update (el, binding, vnode) {
        el.innerHTML = 'dem2'
      }
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    handleClipboard(text, event) {
      clipboard(text, event)
      // this.$toast({
      //   content: 'Copy successfully',
      //   type: 'success',
      //   duration: 2000
      // })
    }
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

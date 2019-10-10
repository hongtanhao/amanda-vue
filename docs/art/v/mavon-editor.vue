<template>
  <div>
    <header>
      <h3>mavon-editor 文本编辑器</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>
      <div>
        <ama-mavon-editor 
          :value="value">
        </ama-mavon-editor>
      </div>
    </section>
    <section>
      <h4 class="opt-h4">See your show</h4>
      <h4>需知</h4>
      <p>
        本组件引用了<ama-a href="https://github.com/hinesboy/mavonEditor" text="mavon-editor"></ama-a>， 然后加以封装
      </P>
      <h4>用途</h4>
      <p>用于格式化输入目标文本</p>
      <h4>怎么用</h4>
      <p>
        <ama-a href="https://github.com/hinesboy/mavonEditor" text="戳这啊"></ama-a>
      </P>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/mavon-editor/index.js" text="<ama-icon>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
export default {
  name: 'a-demo',
  data () {
    return {
      value: '"#### how to use mavonEditor in .vue"'
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

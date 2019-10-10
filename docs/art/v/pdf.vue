<template>
  <div>
    <header>
      <h3>pdf dom save to pdf</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>
      <ama-row>
        <ama-col span="23" align="right">
          <ama-button fill="green" @amaButtonClicked="save">save</ama-button>
        </ama-col>
      </ama-row>
      <ama-dom-to-pdf ref="pdf" :article="article"></ama-dom-to-pdf>
    </section>
    <section>
      <h4 class="opt-h4">See your show</h4>
      <h4>用途</h4>
      <p>
        将dom节点保存为pdf文件
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8082/amanda-vue-docs/art/pdf.html" text="戳这啊"></ama-a>
      </P>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/pdf/index.js" text="<ama-com-to-pdf>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      article: {}
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    this.fetchData()
    // this.$refs['pdf'].showPdf()
  },
  methods: {
    fetchData () {
      import('./content.js').then(res => {
        this.article = res.default
        console.log('this.article==', this.article)
      })
    },
    save () {
     this.$refs['pdf'].dowmloadPdf1()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

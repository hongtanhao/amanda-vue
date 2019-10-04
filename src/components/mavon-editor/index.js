import create from '@/utils/create'
export default function () {
  create('ama-mavon-editor', {
    name: 'ama-mavon-editor',
    template: `<div>
                  <mavon-editor 
                  ref="mavon-editor"
                  v-model = 'value'
                  :ishljs="true" 
                  @change="handleChange"
                  :codeStyle="code_style"
                  @imgAdd="$imgAdd" @imgDel="$imgDel">
                  </mavon-editor>
              </div>`,
    props: {
      value: {
        type: String
      }
    },
    data () {
      return {
        editorContent: '',
        code_style: ''
      }
    },
    mounted () {
      let editor = this.$refs['mavon-editor']
      editor.width = ''
    },
    computed: {
    },
    methods: {
      handleChange (e) {
        this.$emit('amaMavonEditorChange', this.editorContent)
      },
      $imgAdd (pos, $file) {
        // 第一步.将图片上传到服务器.
        var formdata = new FormData()
        formdata.append('image', $file)
        this.img_file[pos] = $file
        this.$http({
          url: '/api/edit/uploadimg',
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
          let _res = res.data
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          this.$refs.md.$img2Url(pos, _res.url)
        })
      },
      $imgDel (pos) {
        delete this.img_file[pos]
      }
    }
  })
}

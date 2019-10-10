import create from '@/utils/create'
export default function () {
  create('ama-dom-to-pdf', {
    name: 'ama-dom-to-pdf',
    template: `<div>
                <div ref="mounted-canvas-data"></div>
                <div ref="to-canvas-data" class="ama-dom-to-pdf-main-article">
                  <div class="ama-dom-to-pdf-article-heading">
                    <div class="ama-pdf-article-heading-title">
                      {{ article.title }}
                    </div>
                  </div>
                  <div ref="content" class="ama-dom-to-pdf-node-article-content" v-html="article.content" />
                </div>
              </div>`,
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    mounted () {
    },
    computed: {

    },
    methods: {
      showPdf () {
        let canvas = this.$refs['to-canvas-data']
        let md = this.$refs['mounted-canvas-data']
        // eslint-disable-next-line
        html2canvas(canvas, {
          onrendered: function (canvas) {
            md.appendChild(canvas)
          }
        })
      },
      handleCanvas (canvas) {
        var contentWidth = canvas.width
        var contentHeight = canvas.height
        // 一页pdf显示html页面生成的canvas高度;
        var pageHeight = contentWidth / 592.28 * 841.89
        // 未生成pdf的html页面高度
        var leftHeight = contentHeight
        // 页面偏移
        var position = 0
        // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28
        var imgHeight = 592.28 / contentWidth * contentHeight
        var pageData = canvas.toDataURL('image/jpeg', 1.0)
        // eslint-disable-next-line
        var pdf = new jsPDF('', 'pt', 'a4')
        // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        // 当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            // 避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage()
            }
          }
        }
        pdf.save('content.pdf')
      },
      dowmloadPdf2 () {
        let mDom = this.$refs['to-canvas-data']
        let that = this
        // eslint-disable-next-line
        html2canvas(mDom, {
          onrendered: function (canvas) {
            that.handleCanvas(canvas)
          }
        })
      },
      dowmloadPdf1 () {
        let mDom = this.$refs['to-canvas-data']
        // eslint-disable-next-line
        html2canvas(mDom, {
          useCORS: true
        }).then(async canvas => {
          this.handleCanvas(canvas)
        })
      }
    }
  })
}

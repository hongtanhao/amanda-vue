# dom-to-pdf dom节点转为pdf

## 在vue的单页面中这样用：
```bash
npm install amav --S 
```
在项目入口文件中导入
`main.js`
```javascript
import Vue from 'vue'
import {AmaPdf} from 'amav'
Vue.use(AmaPdf)
...
```
## 主要原理
>  Here we use window.print() to implement the feature of downloading PDF.
## 参考资源
+ [Evan You on](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf)
## 基础用法
```html
<ama-dom-to-pdf :article="article"></ama-dom-to-pdf>
```
```javascript
export default {
  data () {
    return {
      article: {}
    }
  }
  // next, asign to article
}
```
## API
AmaPdf Props

|参数|说明|类型|是否必须|默认值|版本|
|---|---|---|---|---|---|
|article|dom所需数据容器|Object|是|-|-|
|text|链接文件|string|否|-|-|

article props
|参数|说明|类型|是否必须|默认值|版本|
|---|---|---|---|---|---|
|content|dom节点字符串|String|是|-|-|
|title|文件title|string|是|-|-|
# icon 小图标

## 在vue的单页面中这样用：
```bash
npm install amav --S 
```
在项目入口文件中导入
`main.js`
```javascript
import Vue from 'vue'
import {AmaIcon} from 'amaV'
Vue.use(AmaIcon)
...
```
## 基础用法
```html
<ama-icon :icon="icon"></ama-icon>
<script>
  export default {
    data () {
      return {
        icon: {
          text: "Github",
          color: "",
          activateColor: "",
          url: "",
          size: "1.5rem",
          fontClass: "icon-icon-test76",
          unicode: "&#xe67f;"
        }
      }
    }
  }
</script>
```
## API
AmaIcon Props

|参数|说明|类型|是否必须|默认值|版本|
|---|---|---|---|---|---|
|icon|icon参数集|Object|是|-|-|

icon Props
|属性|说明|类型|
|---|---|---|
|text|icon下方的文本|string|
|color|icon默认显示颜色|string|
|size|icon的大小|string|
|activateColor|icon被点击后的颜色|string|
|url|icon被点击后的跳转目标地址|string|
|fontClass|icon的class名|string|
|unicode|icon的unicode值|string|



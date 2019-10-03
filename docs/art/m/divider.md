# divider 分割器

## 在vue的单页面中这样用：
```bash
npm install amav --S 
```
在项目入口文件中导入
`main.js`
```javascript
import Vue from 'vue'
import {AmaDividier} from 'amaV'
Vue.use(AmaDividier)
...
```
## 基础用法
```html
<p>分割线</p>
<div class="divider">
  <p><ama-divider bgColor="red" width="80%" type='line'></ama-divider></p>
  <p><ama-divider bgColor="green" width="50%" type='line'></ama-divider></p>
  <p><ama-divider bgColor="blue" width="100%" type='line'></ama-divider></p>
</div>
<p>分割块</p>
<div class="divider">
  <p><ama-divider bgColor="red" height="40" type='block'></ama-divider></p>
  <p><ama-divider bgColor="green" height="60" type='block'></ama-divider></p>
  <p><ama-divider bgColor="blue" height="80" type='block'></ama-divider></p>
</div>
```
## API
AmaA Props

|参数|说明|类型|是否必须|默认值|版本|
|---|---|---|---|---|---|
|bgColor|分割器的背景颜色|string|否|-|-|
|width|分割器的宽度|string|否|-|-|
|height|分割器的高度|string|否|-|-|
|type|分割器的类型（线或者块）|string|否|-|-|

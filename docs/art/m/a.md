# a 链接

## 在vue的SPA中这样用：
```bash
npm install amav --S 
```
在项目入口文件中导入
`main.js`
```javascript
import Vue from 'vue'
import {AmaA} from 'amaV'
Vue.use(AmaA)
...
```
## 基础用法
```html
<ama-a href="https://hongtanhao.github.io/" text="个人博客"></ama-a>
```
## API
AmaA Props

|参数|说明|类型|是否必须|默认值|版本|
|---|---|---|---|---|---|
|href|超链接网址|string|是|-|-|
|text|链接文件|string|否|-|-|

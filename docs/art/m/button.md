# button 按钮

## 在vue的单页面中这样用：
```bash
npm install amav --S 
```
在项目入口文件中导入
`main.js`
```javascript
import Vue from 'vue'
import { AmaButton } from 'amav'
Vue.use(AmaButton)
...
```
## 基础用法
```html
  <ama-button fill="red" @amaButtonClicked="handleBtn1">删除</ama-button>
  <ama-button fill="purple" @amaButtonClicked="handleBtn2">修改</ama-button>
  <ama-button fill="blue" @amaButtonClicked="handleBtn3">增加</ama-button>
  <ama-button fill="green" @amaButtonClicked="handleBtn3">查询</ama-button>
  <ama-button @amaButtonClicked="handleBtn3" :disabled="true">禁用</ama-button>
```
## API
AmaButton Props

|参数|说明|类型|是否必须|默认值|版本|
|---|---|---|---|---|---|
|fill|按钮填充背景色|string|否|-|-|

## event
|name 方法名| params参数 |describe 描述|
|---|---|---|
|amaButtonClicked|String, Object|按钮被点击时的回调事件|
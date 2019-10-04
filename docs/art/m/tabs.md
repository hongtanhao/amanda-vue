# tabs 选项卡

## 在vue的单页面中这样用：
```bash
npm install amav --S 
```
在项目入口文件中导入
`main.js`
```javascript
import Vue from 'vue'
import {AmaTabs} from 'amav'
Vue.use(AmaTabs)
...
```
## 基础用法
```html
<ama-tabs @amaTabsClicked="toggle" :tabs="tabs"></ama-tabs>
```
```javascript
...
tabs: [
  {
    id: '1',
    text: '示例1'
  },
  {
    id: '2',
    text: '示例2'
  },
  {
    id: '3',
    text: '示例3'
  }
]
...
methods: {
  toggle(item) {
    // item 是当前选中的项目，若选中1 item === tabs[0]
  }
}
```
## API
AmaTabs Props

|参数|说明|类型|是否必须|默认值|版本|
|---|---|---|---|---|---|
|tabs|选项卡总数|Array|是|-|-|

tabs中的每项都是一个Object类型，Object必须属性有：
|参数|说明|类型|是否必须|默认值|版本|
|---|---|---|---|---|---|
|text|选项卡显示的文本内容|string|是|-|-|

## event
|name 方法名| params参数 |describe 描述|
|---|---|---|
|amaTabsClicked|String, Object|选项卡被选中时的回调事件|
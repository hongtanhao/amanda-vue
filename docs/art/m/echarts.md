# echart 数据可视化

## 参考文档

> [echarts 官网](https://www.echartsjs.com/zh/index.html)

## 在 vue 的单页面中这样用：

```bash
npm install amav --S
```

在项目入口文件中导入
`main.js`

```javascript
import Vue from 'vue'
import {AmaEcharts} from 'amav'
Vue.use(AmaEcharts)
...
```

## 基础用法

```html
<ama-echarts ref="LineMarker" height="400" width="100%" />
```

```javascript
...
this.$refs['LineMarker'].setOption(/*echarts 所需数据*/)
...
```

## API

AmaA Props

| 参数   | 说明           | 类型   | 是否必须 | 默认值 | 版本 |
| ------ | -------------- | ------ | -------- | ------ | ---- |
| height | echarts 的高度 | string | 是       | -      | -    |
| width  | echarts 的宽度 | string | 是       | -      | -    |

## event

| name 方法名 | params 参数     | describe 描述                |
| ----------- | --------------- | ---------------------------- |
| initEcharts | dom 挂在节点    | 用来将 echarst 挂载在 dom 中 |
| setOption   | charts 所需数据 | 为 echarst 供应数据          |

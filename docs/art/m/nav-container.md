# nav-container 导航容器

## 在 vue 的单页面中这样用：

```bash
npm install amav --S
```

在项目入口文件中导入
`main.js`

```javascript
import Vue from 'vue'
import {AmaNavContainer} from 'amav'
Vue.use(AmaNavContainer)
...
```

## 基础用法

```html
<ama-nav-container></ama-nav-container>
```

```javascript
```

## API

AmaA Props

| 参数 | 说明 | 类型 | 是否必须 | 默认值 | 版本 |
| ---- | ---- | ---- | -------- | ------ | ---- |
|orientation|容器项的排列方向|string|'horizontal'|-|


## AmaDragItem event

| name 方法名 | params 参数 | describe 描述 |
| ----------- | ----------- | ------------- |
|amaNavItemClick|导航项|点击当前项被触发的事件|

# 现有vue项目该如何集成

## 方式一：下载源码，自己集成

```bash
## 集成到你的vue项目中
git clone git@github.com:hongtanhao/amanda-vue.git
cd amanda-vue
npm install 
npm run build
```
> 想要在react项目中使用，[戳这里啊]()

## 方式二：以模块化方式使用
推荐使用npm的方式安装
```bash
npm install amav -S
```
## 组件命名规则
+ 组件使用`Vue.component()`生成
+ 组件名： 大部分使用`ama-(html原生标签名)`


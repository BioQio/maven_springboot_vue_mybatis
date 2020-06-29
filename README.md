# springboot+vue

https://github.com/Feithle/maven_springmvc_mybatis_vue

## 简单的springboot

1.idea创建一个springboot项目

2.引入依赖pom

3.测试

​	运行DemoApplication

4.不用配置文件，直接写controller

​	测试contoller:运行demo，浏览器输入网址

## 创建前端vue

> 前面的说明中有

## spring与vue的简单交互（不做数据交换）

打包vue

打包后的dist放到resources/static

无法运行的问题（下面解决）

## Vue组件与路由

![](https://mdfileimg.oss-cn-beijing.aliyuncs.com/markdown_pic/20200627080030.png)

### 各个文件的配置

#### main.js

1.引入路由

```javascript
import router from './router'
```

2.使用路由 

```javascript
import Vue from 'vue'
import App from './App'/*引入App这个组件*/
import router from './router'/*引入路由配置*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',/*最后效果将会替换页面中id为app的div元素*/
  router,/*使用路由*/
  template: '<App/>',/*告知页面这个组件用这样的标签来包裹着,并且使用它*/
  components: { App }/*告知当前页面想使用App这个组件*/
})
```

#### App.vue(组件)

<template>
    <router-view></router-view> /*可以把路由当作组件*/
</template>

#### router.js

> 配置路由文件
>
> 路由文件需要新建一个JavaScript文件说明路由的配置信息


路由文件示例

`router.js`

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/about'
import Recruit from '@/components/recruit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
},
    {
      path: '/about',
      name: 'about',
      component: About
},
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
}
  ]
})

```

记出现的问题：组件安装的问题`npm install --save @/components/about`原因是vue技术不够熟练，但vue的教程实在是看不下去了，写的很模糊。

路由主要是用来页面跳转和加载的，在简单的vue调用过程中并没有用到，但是前后端的整合过程在网上并没有简单的教程，几乎都涉及到了路由的配置，另外加上使用的环境不同导致的操作也相同，按照网上的教程中的代码在此电脑上跑不通。下一步应该着眼于将最简单的vue和springboot整合在一起。

涉及到的路由配置文件有：

`main.js`

`App.vue`

`router.js`

`component.vue`

### 不使用router直接实现springboot对vue的调用

创建了vue后build生成dist文件，文件里的内容复制到springboot项目里的resource的static文件下，运行springboot项目即可打开vue项目首页了。

### 页面跳转待解决

:sob:vue不太懂诶，接下来实现前后端的数据交互

### 前后端的数据交互
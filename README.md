# vue-i18n_black

> 针对i18n所做的国际化小demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8888
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
# 部分截图

### 国际化系列

<img src="https://github.com/Blackloser/vue-i18n_black/blob/master/images/jdfw.png" width="800" height="400"/> <img src="https://github.com/Blackloser/vue-i18n_black/blob/master/images/jdfw.gif" width="800" height="400"/>



# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── components                              // 组件
│   ├── views
│   │   ├── home
│   │   │   ├── home.vue                        // 首页
│   │   ├── i18n
│   │   │   ├── i18n.vue                        // 国际化
│   ├── assets                                  // 自定义js
│   │   │   ├── js                              // js
│   │   │   │   ├── formatter.js                // 格式化
│   │   │   │   ├── i18n.js                     // 字典
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── index.html                                  // 入口html文件                           
.
------------------
```

###说明
  此demo为本地化测试  因此只建了一个字典  建议做国际化的时候配置多套字典  在全局根据需求require引入不同的字典

------------------

###附件 Vue + iview 实现的后台管理系统(使用iview遇到问题的可以来看此demo)
(https://github.com/Blackloser/vue-iview_Black)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

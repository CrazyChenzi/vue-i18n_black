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
### 目录结构
  |-- build                                  // webpack配置文件
	|-- config                                 // 项目打包路径
	|-- static                                 // 静态文件目录
	|-- src                                    // 源码目录
	|   |-- components                         // 组件
	|       |-- common                         // 全局
	|           |-- about.vue                  // 关于页面
	|           |-- index.vue                  // 入口
	|           |-- login.vue                  // 登录页面
	|   	|-- page                           // 主要页面
	|           |-- eharts.vue                 // 百度echarts
	|           |-- form.vue                   // 表单
	|           |-- rtf.vue                    // 富文本框
	|           |-- markdown-viewer.vue        // markdown显示
	|           |-- markdown-editor.vue        // markdown编辑器
	|           |-- table.vue                  // 表格
	|           |-- upload.vue                 // 文件上传
	|   |-- App.vue                            // 页面入口
	|   |-- main.js                            // 程序入口
	|-- .babelrc                               // ES6语法编译配置
	|-- .editorconfig                          // 代码编写规格
	|-- .gitignore                             // push忽略文件
	|-- index.html                             // 入口html页面
	|-- package.json                           // 依赖及配置
	|-- README.md                              // 简介

------------------

###说明
  此demo为本地化测试  因此只建了一个字典  建议做国际化的时候配置多套字典  在全局根据需求require引入不同的字典

------------------

###附件 Vue + iview 实现的后台管理系统(使用iview遇到问题的可以来看此demo)
https://github.com/Blackloser/vue-iview_Black

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

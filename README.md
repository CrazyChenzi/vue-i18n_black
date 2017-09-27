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
  |-- build                                  // webpack配置文件 <br />
	|-- config                                 // 项目打包路径 <br />
	|-- static                                 // 静态文件目录 <br />
	|-- src                                    // 源码目录 <br />
  |   |-- asssets                            // 自定义js css ... 文件 <br />
  |       |-- js                             // 自定义js文件 <br />
  |           |-- formatter.js               // 格式化 <br />
  |           |-- i18n.js                    // i18n自定义配置字典 <br />
	|   |-- components                         // 自定义组件 <br />
  |   |-- views                              // 组件 <br />
  |       |-- home                           // 首页 <br />      
  |       |-- i18n                           // 国际化 <br />
	|   |-- App.vue                            // 页面入口 <br />
	|   |-- main.js                            // 程序入口 <br />
	|-- .babelrc                               // ES6语法编译配置 <br />
	|-- .editorconfig                          // 代码编写规格 <br />
	|-- .gitignore                             // push忽略文件 <br />
	|-- index.html                             // 入口html页面 <br />
	|-- package.json                           // 依赖及配置 <br />
	|-- README.md                              // 简介 <br />

------------------

###说明
  此demo为本地化测试  因此只建了一个字典  建议做国际化的时候配置多套字典  在全局根据需求require引入不同的字典

------------------

###附件 Vue + iview 实现的后台管理系统(使用iview遇到问题的可以来看此demo)
https://github.com/Blackloser/vue-iview_Black

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

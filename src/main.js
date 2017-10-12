// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

/**
 * @author Black_晨
 * 如要使用一下代码， 请将i18n 版本暂时回退到 5.0.3
 */
// import zhLocale from 'iview/dist/locale/zh-CN';
// import enLocale from 'iview/dist/locale/en-US';

// Vue.config.lang = 'en-US';
// Vue.locale('zh-CN', zhLocale);
// Vue.locale('en-US', enLocale);


Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../views/home/home.vue'
import I18N from '../views/i18n/i18n.vue'
export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {path: 'i18N',component: I18N}
      ]
    },
  ]
})

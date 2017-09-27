import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Formatter from './formatter'

Vue.use(VueI18n)

const locale = 'en-US' // default locale
const formatter = new Formatter({ locale })

export default new VueI18n({
  locale,
  formatter,
  messages: {
    'en-US': {
      message: {
        hello: 'hello!!',
        content: 'WCM',
        user: 'user management',
        statistics: 'statistic analysis',
        use: 'use ',
        new_start: 'new and start',
        active: 'active analyze',
        time_interval: 'time interval analyze',
        keep: 'keep ',
        userKeep: 'user keep',
        chumUser: 'chum user',
        comprehensive: 'comprehensive settings',
        plural: 'You have {n, plural, =0{no messages} one{1 message} other{# messages}}.',
        select: '{gender, select, male{He} female{She} other{They}} liked this.',
        number: 'Current Percent: {current, number, percent}',
        time: 'Current Time: {current, time, short}'
      }
    },
    'zh-CN': {
      message: {
        hello: '你好',
        content: '内容管理',
        user: '用户管理',
        statistics: '统计分析',
        use: '使用',
        new_start: '新增和启动',
        active: '活跃分析',
        time_interval: '时段分析',
        keep: '留存',
        userKeep: '用户留存',
        chumUser: '流失用户',
        comprehensive: '综合设置',
        plural: '你有 {n, plural, =0{no messages} one{1 message} other{# 个消息}}.',
        select: '{gender, select, male{他} female{她} other{他们}} 喜欢这个',
        number: '现在占据 {current, number, percent}',
        time: '当前时间: {current, time, medium}',
      }
    }
  }
})

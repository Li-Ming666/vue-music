// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'

import fastClick from 'fastclick'

import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.use(VueTouch, {name: 'v-touch'})

VueTouch.config.swipe = {
  threshold: 50 // 设置左右滑动的距离
}

Vue.config.productionTip = false

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'
import store from './store/'
import './config/rem'
import FastClick from 'fastclick'




import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style'
//引入assets资源一定要写绝对路径
import 'assets/css/swiper.min'
import 'assets/css/style'



//适用于移动端点击
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: {App},
  template: '<App/>'
}).$mount('#app')

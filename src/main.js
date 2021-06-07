import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router, // ES6简写属性，key value 相同时
  render: h => h(App),
}).$mount('#app')

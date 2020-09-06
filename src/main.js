import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import Header from './components/Header/Header.vue'

Vue.config.productionTip = false

Vue.component('HeaderGuide', Header)
new Vue({
  render: h => h(App),
  router  
}).$mount('#app')

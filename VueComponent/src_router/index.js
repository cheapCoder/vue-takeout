import Vue from 'vue'
import App from './App'
import router from './routers/index'

// Vue.use(VueResource);
Vue.config.productionTip = false;
new Vue({
  router,
  components: { 
    App: App
  },
  template: '<App></App>'
  // render: h => h(App)
}).$mount('#root')
import "babel-polyfill";
import Vue from 'vue'
import App from './App'
import store from './vuex/store'

// Vue.use(VueResource);
Vue.config.productionTip = false;
new Vue({
  components: { 
    App: App
  },
  template: '<App></App>',
  // render: h => h(App)
  store,
}).$mount('#root')
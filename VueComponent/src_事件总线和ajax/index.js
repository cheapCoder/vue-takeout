import "babel-polyfill";
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource';


// Vue.use(VueResource);
Vue.config.productionTip = false;
new Vue({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this
  },
  components: { 
    App: App
  },
  template: '<App></App>'
  // render: h => h(App)
}).$mount('#root')
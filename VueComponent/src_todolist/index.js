// import Vue from '../node_modules/vue/dist/vue.js';
import Vue from 'vue'  
import App from './App'

Vue.config.productionTip = false;
new Vue ({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this;
  },
  // el: "#root",
  components: {
    App: App
  },
  template: '<App></App>'
  // render: h => h(App)
}).$mount('#root')
// console.log(3213213);
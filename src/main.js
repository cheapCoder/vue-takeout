import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import { Button , Popup, Lazyload } from 'mint-ui';

import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store';
import * as api from './api/index';
import i18n from './i18n';
import "./mock/mock";
import CarControl from './components/CarControl/CarControl.vue'
import Star from './components/Star/star.vue'
import LazyLoadPic from "./common/images/loading.gif"


Vue.config.productionTip = false

Vue.use(Lazyload, {
  LazyLoadPic
});
// 挂载api到Vue的原型对象上
Vue.prototype.$api = api;

Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
Vue.component('HeaderGuide', Header)
Vue.component("CarControl", CarControl );
Vue.component("Star", Star );


new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')

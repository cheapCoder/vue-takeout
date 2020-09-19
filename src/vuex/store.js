import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import msite from "./modules/MSite"
import shop from "./modules/Shop"
import user from "./modules/User"

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    msite, shop:shop, user
  },
})
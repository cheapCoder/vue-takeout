import {
  GET_SHOP_MSG
} from '../mutation-type'

import {reqShopMsg } from '../../api/index';



export default {
  state: {
    shopMsg: {},

  },
  mutations: {
    [GET_SHOP_MSG](state, shopMsg) {
      state.shopMsg = shopMsg;
    }
  },
  actions: {
    async getShopMsg({ commit }) {
      const shopMsg = await reqShopMsg();
      if (!shopMsg.code) {
        commit(GET_SHOP_MSG, shopMsg.data)
      }
    }
  },
  getters: {

  }
}
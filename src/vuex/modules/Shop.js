import Vue from "vue"

import {
  GET_SHOP_MSG, ADD_FOOD_COUNT, SUB_FOOD_COUNT
} from '../mutation-type'
import { reqShopMsg } from '../../api/index';



export default {
  state: {
    shopMsg: {},

  },
  mutations: {
    [GET_SHOP_MSG](state, shopMsg) {
      state.shopMsg = shopMsg;
    },
    [ADD_FOOD_COUNT](state, food) {
      // if (!food.count) {
      //   Vue.set(food, "count", 0)
      // }
      food.count || Vue.set(food, "count", 0);
      food.count++;
    },
    [SUB_FOOD_COUNT](state, food) {
      food.count && food.count--;
    }
  },
  actions: {
    async getShopMsg({ commit }) {
      const shopMsg = await reqShopMsg();
      if (!shopMsg.code) {
        commit(GET_SHOP_MSG, shopMsg.data)
      }
    },

    changeFoodCount({ commit }, {isAdd, food}) {
      if(isAdd) {
        commit(ADD_FOOD_COUNT, food);
      } else {
        commit(SUB_FOOD_COUNT, food);
      }
    }
  },
  getters: {

  }
}
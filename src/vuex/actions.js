import {
  GET_ADDRESS, GET_FOODCATEGORIES, GET_SHOPS
} from './mutation-type';

import { reqAddress, reqFoodCategories, reqShops } from '../api/index';

export default {
  async getAddress({ commit, state }) {
    let result = await reqAddress(`${state.latitude},${state.longitude}`);
    if (result.code === 0) {
      // console.log(result.data);
      commit(GET_ADDRESS, result.data);
    }
  },

  async getFoodCategories({ commit }) {
    let result = await reqFoodCategories();
    if (result.code === 0) {
      console.log(result);
      commit(GET_FOODCATEGORIES, result.data);
    }
  },

  async getShops({ commit, state }) {
    let result = await reqShops(state.latitude, state.longitude);
    if (result.code === 0) {
      console.log(result);
      commit(GET_SHOPS, result.data);
    }
  }
}
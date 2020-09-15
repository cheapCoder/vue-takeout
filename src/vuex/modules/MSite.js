import {
  GET_ADDRESS, GET_FOODCATEGORIES, GET_SHOPS,
} from '../mutation-type'

import { reqAddress, reqFoodCategories, reqShops } from '../../api/index';


export default {
  state: {
    latitude: 40.10038,
    longitude: 116.36867,
    address: {},
    foodCategories: [],
    shops: [],
  },


  mutations: {
    [GET_ADDRESS](state, address) {
      state.address = address
    },
    [GET_FOODCATEGORIES](state, foodCategories) {
      state.foodCategories = foodCategories
    },
    [GET_SHOPS](state, shops) {
      state.shops = shops
    },
    
  },


  actions: {
    async getAddress({ commit, state }) {
      let result = await reqAddress(`${state.latitude},${state.longitude}`);
      if (result.code === 0) {
        // console.log(result.data);
        commit(GET_ADDRESS, result.data);
      }
    },
  
    async getFoodCategories({ commit }, callback) {
      let result = await reqFoodCategories();
      if (result.code === 0) {
        commit(GET_FOODCATEGORIES, result.data);
      }
      // console.log( typeof callback);
      typeof callback === 'function' && callback()
    },
  
    async getShops({ commit, state }) {
      let result = await reqShops(state.latitude, state.longitude);
      if (result.code === 0) {
        commit(GET_SHOPS, result.data);
      }
    },
  },


  getters: {
    
  }
}
import {
  GET_ADDRESS, GET_FOODCATEGORIES, GET_SHOPS, GET_USERMESSAGE, REMOVEUSER
} from './mutation-type';

import { reqAddress, reqFoodCategories, reqShops, reqAutoLogin } from '../api/index';

export default {
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

  // 更改用户信息项
  setUser({ commit }, user) {
    // 存储token
    localStorage.setItem("userToken", user.token);
    commit(GET_USERMESSAGE, user);
  },

  // 自动登录并更新用户信息
  async login_auto({ commit }) {
    const result = await reqAutoLogin();
    console.log(result);
    result.code || commit(GET_USERMESSAGE, result.data);
  },

  // 登出功能
  loginOut({commit}) {
    localStorage.removeItem("userToken");
    commit(REMOVEUSER)

  }
}
import {
 GET_USERMESSAGE, REMOVEUSER, 
} from '../mutation-type'
import {reqAutoLogin } from '../../api/index';
import router from '../../router';



export default {
  state: {
    user: {},

  },
  mutations: {
    [GET_USERMESSAGE](state, user) {
      state.user = user;
    },
    [REMOVEUSER] (state ) {
      state.user = {};
    },
  },
  actions: {
    setUser({ commit }, user) {
      // 存储token
      localStorage.setItem("userToken", user.token);
      commit(GET_USERMESSAGE, user);
    },
  
    // 自动登录并更新用户信息
    async login_auto({ commit, state }) {
      if (localStorage.getItem("userToken") && JSON.stringify(state.user) === "{}") {
        const result = await reqAutoLogin();
        if (!result.code) {
          commit(GET_USERMESSAGE, result.data);
          let arr = ["/msite", "/order", "/search", "/profile", "/", "/shop/goods", "/shop/shopRatings", "/shop/shopInfo"]
          arr.indexOf(router.currentRoute.path) > -1 || router.replace('/msite');
          // router.currentRoute.path === "/login" && router.replace('/msite');
        }
      }
    },
  
    // 登出功能
    loginOut({ commit }) {
      localStorage.removeItem("userToken");
      commit(REMOVEUSER)
    },
  
  },
  getters: {
    
  }
}
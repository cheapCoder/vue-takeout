import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1
}
const mutations = {
  add(state) {
    state.count++;
  },
  sub(state) {
    state.count--;
  }
};
const actions = {
  // increment(context) {
  //   context.commit('add');
  // },
  // decrement(context) {
  //   context.commit('sub');
  // },
  incrementIfOdd({ commit, state }) {
    if (state.count % 2 == 1) {
      commit('add');
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('add');
    }, 1000);
  }
}
const getters = {
  evenOrOdd(state,getters) {
    return state.count % 2 === 1 ? '奇数' : '偶数';
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
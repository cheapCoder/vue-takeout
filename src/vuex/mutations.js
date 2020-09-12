import {
  GET_ADDRESS, GET_FOODCATEGORIES, GET_SHOPS, GET_USERMESSAGE, REMOVEUSER
} from './mutation-type'

export default {
  [GET_ADDRESS](state, address) {
    state.address = address
  },
  [GET_FOODCATEGORIES](state, foodCategories) {
    state.foodCategories = foodCategories
  },
  [GET_SHOPS](state, shops) {
    state.shops = shops
  },
  [GET_USERMESSAGE](state, user) {
    state.user = user;
  },
  [REMOVEUSER] (state ) {
    state.user = {};
  }
}
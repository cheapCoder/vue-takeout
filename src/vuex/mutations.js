import {
  GET_ADDRESS, GET_FOODCATEGORIES, GET_SHOPS
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
}
import { REQ_SUCCCESS, REQ_FAIL } from './mutations.type'

export default {
  [REQ_SUCCCESS] (state, users) {
   state.arr = users
  },
  [REQ_FAIL] (state, err) {
    alert("请求出错：" + err.message);
  }
}
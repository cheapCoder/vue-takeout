import axios from "axios";
import { REQ_SUCCCESS, REQ_FAIL } from './mutations.type'

export default {
  async search({ commit, state }, searchContent) {
    if (!searchContent) {
      alert("input the content 0..0");
      return;
    }
    state.arr = [];
    let newArr = []
    let response;
    try {
      response = await axios.get(
        "https://api.github.com/search/users",
        {
          params: {
            q: searchContent,
          },
        }
      );
      response.data.items.forEach(function (val) {
        newArr.push({
          name: val.login,
          avatar_url: val.avatar_url,
          html_url: val.html_url,
        });
      });
      commit(REQ_SUCCCESS, newArr);
    } catch (err) {
      commit(REQ_FAIL, err);
    }
    
  }
}
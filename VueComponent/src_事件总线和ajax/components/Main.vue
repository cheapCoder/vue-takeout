<template>
  <div>
    <div v-if="arr.length === 0">
      <span>
        <a :href="url">
          <img :src="avatar_url" alt />
        </a>
        <h6>{{name}}</h6>
      </span>
    </div>
    <div v-else>
      <div class="main" v-for="val in arr" :key="val.name">
        <a :href="val.html_url">
          <img :src="val.avatar_url" />
        </a>
        <h6>{{val.name}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url: "https://github.com/yyx990803",
      avatar_url: "https://avatars1.githubusercontent.com/u/499550?v=4",
      name: "yyx990803",
      arr: [],
    };
  },
  beforeCreate() {
    var that = this;
    // this.$globalEventBus.$on("mainSearch", function (searchContent) {
    //   if (!searchContent) {
    //     alert("input the content 0..0");
    //     return;
    //   }
    //   axios
    //     .get("https://api.github.com/search/users", {
    //       params: {
    //         q: searchContent,
    //       },
    //     })
    //     .then((response) => {
    //       // console.log(response.data.items);
    //       that.arr = [];
    //       response.data.items.forEach(function (val) {
    //         that.arr.push({
    //           name: val.login,
    //           avatar_url: val.avatar_url,
    //           html_url: val.html_url,
    //         });
    //       });
    //     })
    //     .catch((err) => {
    //       alert("请求出错:" + err.message);
    //     });
    // });
    this.$globalEventBus.$on("mainSearch", async function (searchContent) {
      if (!searchContent) {
        alert("input the content 0..0");
        return;
      }
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
      } catch (err) {
        alert("请求出错：" + err.message);
      }
      that.arr = [];
      response.data.items.forEach(function (val) {
        that.arr.push({
          name: val.login,
          avatar_url: val.avatar_url,
          html_url: val.html_url,
        });
      });
    });
  },
};
</script>

<style scoped>
span,
div.main {
  font-size: 16px;
  padding: 5px;
  display: inline-block;
  border: 1px solid #ccc;
  text-align: center;
  width: 31%;
}
a {
  margin: auto;
  display: block;
  width: 100px;
  height: 100px;
}
img {
  /* display: block; */
  width: 100px;
  height: 100px;
}
h6 {
  font-weight: 400;
  margin: 0 0 10px 0;
}
</style>
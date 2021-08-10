<template>
  <div class="outer">
    <h3>about</h3>
    <router-link class="news" to="/about/news">news</router-link>
    <router-link class="messages" to="/about/messages">messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
* {
  list-style: none;
  margin: 0px;
  padding: 0;
  text-decoration: none;
}
.outer {
  line-height: 100px;
  margin: 0;
  height: 600px;
}
h3 {
  margin: 0;
  font-weight: 400;
}
.news,
.messages {
  text-decoration: none;
  color: black;
  font-size: 25px;
}
.router-link-active {
  color: red;
}
</style>
<template>
  <div class="outer">
    <div class="left">
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.outer {
  text-align: center;
  /* width: 600px; */
  height: 204px;
  margin: 50px auto;
}
.router-link-active {
  color: red;
}
a {
  color: black;
  text-decoration: none;
  line-height: 100px;
  font-size: 20px;
  border: 1px solid #ccc;
  display: block;
  width: 200px;
  height: 100px;
}
.left {
  float: left;
}
.right {
  border: 1px solid #ccc;
  line-height: 204px;
  width: 300px;
  height: 204px;
  font-size: 50px;
  float: left;
}
</style>
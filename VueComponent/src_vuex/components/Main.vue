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
  import {mapState} from 'vuex'

export default {
  name: "Main",
  computed: {
    ...mapState(['arr', 'url', 'avatar_url', 'name'])
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
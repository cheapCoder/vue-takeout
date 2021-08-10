<template>
  <ul>
    <li v-for="val in message" :key="val.id">
      <!-- <router-link :to="'/about/messages/messageDetail/' + val.id + '?name=liheng'">{{val.title}}</router-link> -->
      <router-link
        :to="{name: 'messageDetail', params: {id: val.id}, query: {name: 'liheng'}}"
      >{{val.title}}</router-link>
      <button @click="pushShow(val)">push</button>
      <button @click="replaceShow(val)">replace</button>
    </li>
    <router-view></router-view>
    <!-- <router-view msg='what'></router-view> -->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      message: [],
      what: "ne",
    };
  },
  methods: {
    pushShow(val) {
        this.$router.replace({
          name: "messageDetail",
          params: { id: val.id },
          query: { name: "liheng" },
        })
      .catch( (error) => {
        console.log(error.message);
      })
    },
    replaceShow(val) {
      // try {
        this.$router.replace({
          name: "messageDetail",
          params: { id: val.id },
          query: { name: "liheng" },
        })
        .catch( (error) => {
        console.log(error.message);
      })
    },
  },
  mounted() {
    setTimeout(() => {
      this.message = [
        { id: 1, title: "message001" },
        { id: 2, title: "message002" },
        { id: 3, title: "message003" },
        { id: 4, title: "message004" },
      ];
    }, 250);
  },
};
</script>

<style scoped>
a {
  display: block;
  list-style: none;
  margin: 0px;
  padding: 0;
  text-decoration: none;
  color: black;
}
</style>
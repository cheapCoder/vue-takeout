<template>
  <div>
    <h2>Search Github Users</h2>
    <input
      type="text"
      placeholder="enter the name you search"
      v-model="searchContent"
      @focus="searchContent = '';"
    />
    <button @click="search">Search</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  data() {
    return {
      searchContent: ''
    }
  },
methods: {
  // ...mapActions(['what']),
  search() {
    console.log(321);
    this.searchContent = this.searchContent.trim();
    this.$store.dispatch("search", this.searchContent);
  }
},
}
</script>

<style scoped>
div {
  height: 105px;
  padding: 20px 0;
  background-color: #eee;
  margin-bottom: 20px;
}
</style>
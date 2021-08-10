<template>
  <div>
    <h2>Search Github Users</h2>
      <input type="text" placeholder="enter the name you search" v-model="searchContent" @focus="searchContent = '';">
      <button @click="search" >Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: ''
    }
  },
methods: {
  search() {
    this.$globalEventBus.$emit('mainSearch', this.searchContent);
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
<template>
  <ul>
    <li v-for="(val, index) in todo_list" :key="val.id">
      <input type="checkbox" v-model="val.isFinish" />
      {{val.content}}
      <button  @click ="click(index)">delete it{{index}}</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
      isShow:true
    };
  },
  props: ["todo_list"],
  methods: {
    click (index) {
      // console.log(index);
      // this.$emit('deleteit', index)
      this.$globalEventBus.$emit('deleteit', index);
    }
  }
};
</script>

<style scoped>
ul {
  padding: 10px;
}
button {
  display: none;
}
li:hover button {
  line-height: 50px;
  border: 1px solid transparent;
  float: right;
  display: block;
  background-color: skyblue;
  margin-right: 20px;
  border-radius: 3px;
  box-shadow: 2px 2px 5px #888888;
}
li {
  /* padding: 7px 0px ; */
  line-height: 50px;
  height: 50px;
  list-style: none;
}
li:hover {
  background-color: #eee;
  box-shadow: 2px 2px 5px #888888;
}
</style>
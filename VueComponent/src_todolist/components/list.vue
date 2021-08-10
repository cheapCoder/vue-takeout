<script>
import item from "./item";
export default {
  name: "list",
  data() {
    return {
      index: -1,
    };
  },
  props: { todo_list: Array, checkit: Function },
  components: {
    item,
  },
  methods: {
    // deleteit(index) {
    //   // console.log(index);
    //   this.index = index;
    //   this.$emit("deleteit", this.index);
    // },
  },
};
</script>

<template>
  <div>
    <item :todo_list="todo_list"  :checkit="checkit"></item>
  </div>
</template>


<style scoped>
</style>
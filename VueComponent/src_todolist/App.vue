<template>
  <div>
    <heng ref="heng" :message="message"></heng>
    <list :todo_list="todo_list"  :checkit="checkit"></list>
    <foot :todo_list="todo_list" :clear="clear" :checkAll="checkAll"></foot>
  </div>
</template>

<script>
import heng from "./components/Header";
import foot from "./components/foot";
import item from "./components/item";
import list from "./components/list";
import { getKey, setKey } from "./utils/storageUtils.js";
export default {
  mounted() {
    // setTimeout(() => {
      this.todo_list = getKey();
    // }, 1000);
    // console.log(this.$refs.heng);
    this.$refs.heng.$on('addtodo2',this.addtodo)
    // let that = this
    // this.$globalEventBus.$on('deleteit', function(index) {
    //   console.log(that);
    //   that.todo_list.splice(index, 1);
    // },)
    this.$globalEventBus.$on('deleteit', this.deletetodo);
  },
  beforeDestroy() {
    this.$refs.heng.off('addtodo2');
  },
  data() {
    return {
      message: "hello vue",
      todo_list: [
        // {
        //   id: 1,
        //   content: "test",
        //   isFinish: false,
        // },
        // {
        //   id: 2,
        //   content: "打代码",
        //   isFinish: true,
        // },
        // {
        //   id: 3,
        //   content: "吃饭",
        //   isFinish: false,
        // },
      ],
    };
  },
  components: {
    heng,
    foot,
    item,
    list,
  },
  watch: {
    todo_list: {
      deep: true,
      handler: setKey,
    },
  },
  methods: {
    addtodo(todo) {
      // console.log('addtodo');
      this.todo_list.unshift(todo);
    },
    deletetodo (index) {
      this.todo_list.splice(index, 1);
    },
    clear() {
      // this.todo_list.splice(0, this.todo_list.length);
      // console.log(313121);
      this.todo_list = this.todo_list.filter((val) => !val.isFinish);
    },
    checkAll(value) {
      this.todo_list.forEach((val) => {
        val.isFinish = value;
      });
    },
    checkit(list) {
      console.log(list);
      // this.todo_list = list
      // todo.isFinish = val
    }
  },
};
</script>

<style scoped>
* {
  margin: 5px;
  list-style: none;
}
div {
  font-size: 20px;
  border: 1px solid #aaa;
}
</style>
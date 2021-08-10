<script>
export default {
  name: "foot",
  data() {
    return {
      // isFull: false
    };
  },
  computed: {
    finishcount() {
     return this.todo_list.reduce((preval, val) => {
        return preval + (val.isFinish ? 1 : 0);
      }, 0);
    },
    isFull: {
      get() {
        return this.finishcount === this.todo_list.length && this.finishcount > 0
      },
      set(val) {
        this.checkAll(val);
      }
    }
  },
  props: ["todo_list", "clear", "checkAll"],
  methods: {
  clearit () {
    this.clear()
  }
}
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="isFull"/>
    已完成{{finishcount}} / 全部{{todo_list.length}}
    <button @click="clearit">clear all task</button>
  </div>
</template>
<style scoped>
div {
  padding: 20px;
  /* line-height: ; */
}
button {
  height: 35px;
  border: 1px solid transparent;
  float: right;
  display: block;
  background-color: skyblue;
  margin: auto 20px;
  border-radius: 3px;
  box-shadow: 2px 2px 5px #888888;
}
</style>
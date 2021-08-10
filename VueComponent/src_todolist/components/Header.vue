<script>
export default {
  name: "Header",
  data() {
    return {
      // message : 'liheng'
      val: "",
    };
  },
  props: {
    addtodo: {
      type: Function,
      require: true,
    },
    message: String
  },
  methods: {
    add() {
      if (!this.val) {
        return;
      }
      const todo = {
        "id": Date.now(),
        "content": this.val.trim(),
        "isFinish": false
      };
      // this.addtodo(todo);
      this.$emit('addtodo2', todo);
      this.val = '';
    },
  },
};
</script>

<template>
  <div>
    <input type="text" placeholder="input your shit mission" v-model="val" @keyup.enter="add" />
  </div>
</template>

<style scoped>
input {
  margin: auto;
  display: block;
  width: 500px;
  height: 40px;
  border: none;
  /* outline: solid pink 2px */
  outline: none;
  /* border-radius: 20%; */
}
</style>
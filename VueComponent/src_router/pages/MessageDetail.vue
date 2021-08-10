<template>
  <ul>
    <!-- <li>id : {{$route.params.id}}</li> -->
    <li>id : {{id}}</li>
    <li>name : {{name}}</li>
    <li>title : {{message.title}}</li>
    <li>content : {{message.content}}</li>
  </ul>
</template>

<script>
// const allMessageDetils = [
//   { id: 1, title: "message001", content: "message content001" },
//   { id: 3, title: "message003", content: "message content003" },
//   { id: 4, title: "message004", content: "message content004" },
// ];
export default {
  mounted() {
    // var that = this;
    this.show();
  },
  props: ['id', 'name'],
  data() {
    return {
      message: {},
      allMessageDetils: [
        { id: 1, title: "message001", content: "message content001" },
        { id: 2, title: "message002", content: "message content002" },
        { id: 3, title: "message003", content: "message content003" },
        { id: 4, title: "message004", content: "message content004" },
      ],
    };
  },
  watch: {
    $route(to, from) {
      //
      // console.log(this);
      this.show();
    },
  },
  methods: {
    show() {
      // debugger
      // setTimeout(function() {
      this.message = this.allMessageDetils.find((val) => {
        // console.log(val);
        // console.log(this.$route);

        return val.id == this.id * 1;
        // return false
      });
      // }, 250);
    },
  },
};
</script>

<style>
</style>
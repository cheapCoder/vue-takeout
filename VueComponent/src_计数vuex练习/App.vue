<template>
  <div>click {{count}} times, count is {{evenOrOdd2}}
    <hr>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  mounted() {
    console.log(this.$store);
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters({
      evenOrOdd2: 'evenOrOdd'
    })
  },
  methods: {
    increment() {
      this.$store.commit('add')
    },
    decrement() {
      this.$store.commit('sub');
    },
    incrementIfOdd() {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  },
  // data() {
  //   return {
  //     count: 1,
  //     message: "偶数",
  //   };
  // },
};
</script>

<style scoped>
  * {
    font-size: 20px;
  }
</style>
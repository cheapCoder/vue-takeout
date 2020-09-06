<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: "App",
  data() {
    return {

    }
  },
  methods: {
   
  },
  components: {
    FooterGuide,
  },
};
</script>

<style lang="stylus">

</style>

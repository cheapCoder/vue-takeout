<template>
  <div>
    <search></search>
    <Main></Main>
  </div>
</template>

<script>
import search from "./components/Search";
import Main from "./components/Main";
export default {
  
  data() {
    return {};
  },
  components: {
    search,
    Main,
  },
};
</script>
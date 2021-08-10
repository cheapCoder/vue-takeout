<template>
  <div>
    <h3 v-if="!message">LOADING......</h3>
    <h3 v-else>the most stars repositories is <a :href="url">{{message}}</a></h3>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      message: '',
      url: '',
    }
  },
  mounted() {
  //  setTimeout(() => {
  //     this.$http.get('https://api.github.com/search/repositories?q=vue&sort=stars')
  //   .then((res) => {
  //     console.log(res.body.items[0]);
  //     this.message = res.body.items[0].full_name;
  //     this.url = res.body.items[0].html_url;
  //     // this.url = 
  //   }).catch((err) => {
  //     throw err
  //   })
  //  }, 1000)
    // axios.get('https://api.github.com/search/repositories', {
    //   params: {
    //     q: 'react',
    //     sort: 'starts'
    //   }
    // }).then((res) => {
    //   console.log(res.data.items[0]);
    //   this.message = res.data.items[0].full_name;
    //   this.url = res.data.items[0].html_url;
    // }).catch((err) => {
    //   throw err
    // })
    axios.get('http://localhost:8080/api/repositories').then((res) => {
      console.log(res);
      this.message = res.data.name;
      this.url = res.data.url;
    })
  },
}
</script>
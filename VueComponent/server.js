const app = require('express')();

app.get('/repositories',(req, res) => {
      res.send({name: 'vue', url: 'https://github.com/vue/vue'})
    })

app.listen(4000, () => {
  console.log('server is running......');
})
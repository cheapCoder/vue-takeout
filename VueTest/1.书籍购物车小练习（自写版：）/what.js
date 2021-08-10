const app = new Vue({
  el: 'main',
  data: {
    message: [{
      index: 1,
      name: '算法导论',
      releaseDate: '2006-9',
      price: 85,
      num: 1,
    }, {
      index: 2,
      name: 'UNIX编程艺术',
      releaseDate: '2006-2',
      price: 59,
      num: 1,
    }, {
      index: 3,
      name: '编程珠玑',
      releaseDate: '2008-10',
      price: 39,
      num: 1,
    }, {
      index: 4,
      name: '代码大全',
      releaseDate: '2006-3',
      price: 128,
      num: 1,
    }],
    emptyShow: false
  },
  computed: {
    totalPrice: function () {
      let total = 0;
      this.message.forEach((val, index) => {
        total += val.price * val.num;
      });
      return total;
    }
  },
  methods: {
    sun(index) {
      this.message.splice(index, 1);
      console.log(this.message.length);
      if (this.message.length === 0) {
        this.emptyShow = true;
      } else {
        this.emptyShow = false
      }
    },
    sub(item) {
      if (item.num > 0) {
        item.num--;
      }
    }

  }
})
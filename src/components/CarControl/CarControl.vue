<template>
  <div class="cartcontrol">
    <transition name="subBtn">
      <div class="iconfont iconbianzu64" @click.stop="foodCount(false)" v-show="food.count"></div>
    </transition>
    <div class="cart-count">{{food.count || ""}}</div>
    <div class="iconfont iconmainongji" @click.stop="foodCount(true)"></div>
  </div>
</template>
<script type="text/ecmascript-6">
import throttle from "lodash/throttle";
export default {
  props: {
    food: {
      type: Object,
      require: true,
    },
  },
  methods: {
    foodCount: throttle(function (isAdd) {
      this.$store.dispatch("changeFoodCount", { isAdd, food: this.food });
    }, 400, {'trailing': false}),
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.subBtn-leave-active, .subBtn-enter-active {
  transition: all 0.5s;
}

.subBtn-enter, .subBtn-leave-to {
  transform: translateX(50px) rotate(180deg);
  opacity: 0;
}

.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .iconbianzu64 {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 21px;
    color: $green;
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color: rgb(147, 153, 159);
  }

  .iconmainongji {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 21px;
    color: $green;
  }
}
</style>


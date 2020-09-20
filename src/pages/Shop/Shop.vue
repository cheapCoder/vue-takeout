<template>
  <div>
    <ShopHeader />
    <nav>
      <router-link replace :to="`/shop/${shopMsg.id}/goods`">点餐</router-link>
      <router-link replace :to="`/shop/${shopMsg.id}/shopRatings`">评价</router-link>
      <router-link replace :to="`/shop/${shopMsg.id}/shopInfo`">商家</router-link>
    </nav>
    <keep-alive include="goods">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import { mapState } from "vuex";
import { saveFoodCar } from "../../utils/index";

export default {
  name: "shop",
  mounted() {
    this.$store.dispatch("getShopMsg", this.$route.params.id);
    const that = this
    window.addEventListener("unload", () => {
      saveFoodCar(that.shopMsg.id, that.shopCar);
    });
  },
  computed: {
    ...mapState({
      shopMsg: (state) => state.shop.shopMsg,
      shopCar: (state) => state.shop.shopCar,
    }),
  },
  components: {
    ShopHeader,
  },
  beforeDestroy() {
    console.log(this.shopCar);
    saveFoodCar(this.shopMsg.id, this.shopCar);
  },
};
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

nav {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  bottom-border-1px(rgba(7, 17, 27, 0.1));

  a {
    flex: 1;
    font-size: 14px;

    &.router-link-active {
      color: $green;
      position: relative;

      // border-bottom 1px solid $green
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        width: 35px;
        height: 2px;
        background-color: $green;
      }
    }
  }
}
</style>


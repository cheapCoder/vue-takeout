<template>
  <div>
    <ShopHeader />
    <nav>
      <router-link replace to="`/shop/${$route.params.id}/goods`">点餐</router-link>
      <router-link replace to="`/shop/${$route.params.id}/shopInfo`">评价</router-link>
      <router-link replace to="`/shop/${$route.params.id}/shopRatings`">商家</router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import ShopHeader from "../../components/ShopHeader/ShopHeader";

export default {
  mounted() {
    this.$store.dispatch("getShopMsg", this.$route.params.id);
  },
  components: {
    ShopHeader,
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


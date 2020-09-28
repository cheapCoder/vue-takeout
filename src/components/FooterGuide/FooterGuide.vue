<template>
  <div class="footerGuide">
    <div class="footerItem" :class="{active: $route.path === '/msite'}" @click="footerActive('/msite')">
      <i class="iconfont iconxingzhuanggongnengtubiao-1"></i>
      <span>{{$t("msite")}}</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/search'}" @click="footerActive('/search')">
      <i class="iconfont iconxingzhuanggongnengtubiao-3"></i>
      <span>{{$t("search")}}</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/order'}" @click="footerActive('/order')">
      <i class="iconfont iconxingzhuanggongnengtubiao-2"></i>
      <span>{{$t("order")}}</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/profile'}" @click="footerActive('/profile')">
      <i class="iconfont iconxingzhuanggongnengtubiao-"></i>
      <span>{{$t("profile")}}</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    footerActive(path) {
      // this.$router.replace(path).catch((err) => {
      // });
      if(this.$route.path === path) {
        this.$router.push = path
      } else {
        this.$router.replace(path)
      }
      
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.footerGuide
  top-border-1px(#eee)
  background #fff
  bottom 0
  left 0
  position fixed
  bottom 0
  display flex
  width 100%
  height  50px
  box-sizing border-box
  .active
    color $green
  .footerItem
    height 50px
    text-align center
    width 25%
    display flex
    flex-direction column
.iconfont
  font-size 22px
  line-height 30px
</style>
<template>
  <div class="footerGuide">
    <div class="footerItem" :class="{active: $route.path === '/msite'}" @click="footerActive('/msite')">
      <i class="iconfont iconxingzhuanggongnengtubiao-1"></i>
      <span>首页</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/search'}" @click="footerActive('/search')">
      <i class="iconfont iconxingzhuanggongnengtubiao-3"></i>
      <span>搜索</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/order'}" @click="footerActive('/order')">
      <i class="iconfont iconxingzhuanggongnengtubiao-2"></i>
      <span>订单</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/profile'}" @click="footerActive('/profile')">
      <i class="iconfont iconxingzhuanggongnengtubiao-"></i>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    footerActive(path) {
      // this.$router.replace(path).catch((err) => {
      //   console.log(err.message);
      // });
      if(this.$route.path === path) {
        window.location = "http://localhost:8000/#" + path;
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
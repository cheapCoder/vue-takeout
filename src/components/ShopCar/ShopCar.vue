<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="showCar">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight': shopCar.length}">
              <i
                class="iconfont iconxingzhuanggongnengtubiao-2"
                :class="{'highlight': shopCar.length}"
              ></i>
            </div>
            <div class="num">{{totalCount}}</div>
          </div>
          <div class="price highlight">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{shopInfo.deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div
            class="pay"
            :class="{'enough': priceText.type}"
            @click="settlement"
          >{{priceText.message}}</div>
        </div>
      </div>
      <transition name="showList">
        <div class="shopcart-list" v-show="toggleShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="food in shopCar" :key="food.name">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <CarControl :food="food"></CarControl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <div class="list-mask" v-show="toggleShow" @click="toggleShow=false"></div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapState, mapGetters } from "vuex";
import BScroll from "@better-scroll/core";
import { MessageBox, Toast } from "mint-ui";
export default {
  data() {
    return {
      toggleShow: false,
    };
  },
  computed: {
    ...mapGetters(["totalPrice", "totalCount"]),
    ...mapState({
      shopCar: (state) => state.shop.shopCar || [],
      shopInfo: (state) => state.shop.shopMsg.info || {},
    }),
    priceText() {
      if (this.totalPrice < this.shopInfo.deliveryPrice) {
        return {
          type: 0,
          message: `还差￥${
            this.shopInfo.deliveryPrice - this.totalPrice
          }元起送`,
        };
      } else {
        return { type: 1, message: `结算` };
      }
    },
  },
  methods: {
    settlement() {
      if (this.priceText.type) {
        MessageBox("你别骗了:>");
      } else {
        MessageBox("未达到起送价");
      }
    },
    empty() {
      if (this.totalCount) {
        MessageBox.confirm("确定清空").then(() => {
          this.$store.commit("emptyShopCar");
        });
      } else {
        Toast("有啥好清的OVO");
      }
    },
    showCar() {
      this.toggleShow = !this.toggleShow;
      if (this.toggleShow == true) {
        this.$nextTick(() => {
          if (this.scroll) {
            console.log("refresh");
            this.scroll.refresh();
          } else {
            console.log("new");
            this.scroll = new BScroll(".list-content", {
              scrollY: true,
              click: true,
            });
          }
        });
      }
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.showList-enter-active, .showList-leave-active {
  transition: all 0.5s;
}

.showList-enter, .showList-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

// 注意这种方式不可用，过渡类名在过渡结束后都会删除，用动画animation才不会删除
// .showList-enter-active, .showList-leave-active
// transition all 0.5s
// .showList-enter-to, .showList-leave
// opacity 1
// transform translateY(-500px)
.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;

  .content {
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4);

    .content-left {
      flex: 1;

      .logo-wrapper {
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        border-radius: 50%;
        background: #141d27;
        font-size: 24px;

        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          text-align: center;
          background: #2b343c;

          &.highlight {
            background: $green;
          }

          .iconxingzhuanggongnengtubiao-2 {
            line-height: 44px;
            font-size: 24px;
            color: black;

            &.highlight {
              color: #fff;
            }
          }
        }

        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 9px;
          font-weight: 700;
          color: #ffffff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }

      .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;

        &.highlight {
          color: #fff;
        }
      }

      .desc {
        display: inline-block;
        vertical-align: top;
        margin: 12px 0 0 12px;
        line-height: 24px;
        font-size: 10px;
      }
    }

    .content-right {
      flex: 0 0 105px;
      width: 105px;

      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        background: #2b333b;

        // &.not-enough
        &.enough {
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }

  .shopcart-list {
    position: absolute;
    left: 0;
    bottom: 45px;
    z-index: -1;
    width: 100%;

    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);

      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }

      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }

    .list-content {
      padding: 0 18px;
      max-height: 240px;
      overflow: hidden;
      background: #fff;
      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        bottom-border-1px(rgba(7, 17, 27, 0.1));

        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
}

.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7, 17, 27, 0.6);

  &.fade-enter-active, &.fade-leave-active {
    transition: all 0.5s;
  }

  &.fade-enter, &.fade-leave-to {
    opacity: 0;
  }
}
</style>

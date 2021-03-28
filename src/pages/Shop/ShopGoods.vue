记录：使用BetterScroll刚npm run serve时无法进行滑动，需要修改BetterScroll的源码，
      修改BetterSC/shared-utils/src/dom.ts 中的常量hasTouch为true, 
      这样就可以在初始化时对参数进行设置,把一切掌握在自己手中

      使用方法如下:
        new BScroll时,在参数options中加入

        mouseWheel: true,   //开启鼠标滚轮
        disableMouse: false,   //启用鼠标拖动
        disableTouch: false    //启用手指触摸
      参考博客：https://www.cnblogs.com/mldonkey/p/11421577.html


<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="content" ref="leftFoods">
        <li
          class="menu-item"
          v-for="(goodCategory, index) in shopMsg.goods"
          :key="index"
          :class="{'current': currentIndex == index}"
          @click="moveToFood(index)"
        >
          <img class="icon" :src="goodCategory.icon || ''" />
          <span class="text bottom-border-1px">{{goodCategory.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul class="content" ref="rightFoods">
        <li class="food-list-hook" v-for="(goodCategory, index) in shopMsg.goods" :key="index">
          <h1 class="title">{{goodCategory.name}}</h1>
          <ul>
            <li
              class="food-item bottom-border-1px"
              v-for="(food, index) in goodCategory.foods"
              :key="index"
              @click="showFood(food)"

            >
              <div class="icon">
                <img width="57" height="57" :src="food.image" />
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper"><CarControl :food="food"/></div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ShopCar/>
    <Food :food="food" ref="showThisFood"/>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapState } from "vuex";
import BScroll from "@better-scroll/core";
import MouseWheel from '@better-scroll/mouse-wheel';
import ShopCar from "../../components/ShopCar/ShopCar";
import Food from '../../components/Food/Food';

BScroll.use(MouseWheel)

export default {
  name: 'goods',
  data() {
    return {
      rScroll: 0,
      lScroll: 0,
      goodTops: [],
      food: {} //点击时在方法内即使赋值
    };
  },
  computed: {
    ...mapState({
      shopMsg: (state) => state.shop.shopMsg
    }),
    currentIndex() {
      // 方式顶部下拉和底部上滑时左边分类栏无当前样式
      if (this.rScroll < 0) {
        return 0;
      }
      if (this.rScroll > this.goodTops[this.goodTops.length - 1]) {
        return this.goodTops.length - 1;
      }
      let thisIndex = this.goodTops.findIndex((val, index, arr) => {
        return val <= this.rScroll + 20 && this.rScroll + 20 < arr[index + 1];
      });
      // 实现左侧分类栏不在页面内时的自动滚动
      // 方法一：判断当前index的位置是否在页面内
      this.$nextTick(function() {
        let thisFood = this.$refs.leftFoods.children[thisIndex];
        if (
          thisFood &&
          (thisFood.clientHeight > 0 || thisFood.clientHeight < 400)
        ) {
          this.leftScroll.scrollToElement(thisFood, 600);
        }
      });
      // 方法二： 判断index是否变化 (存在问题。。。)
      // if(this.oldIndex && this.index !== thisIndex ) {
      //     this.oldIndex = thisIndex;
      //     this.leftScroll.scrollToElement(this.$refs.leftFood.children[thisIndex], 600);
      // }

      return thisIndex;
    },
  },
  methods: {
    moveToFood(index) {
      // let that =
      let that = this;
      this.rightScroll.scrollTo(0, -that.goodTops[index], 600);
      this.rScroll = this.goodTops[index];
    },
    showFood(food) {
      this.food = food;
      this.$refs.showThisFood.toggleShow();
    }
  },
  watch: {
    shopMsg() {
      this.$nextTick(() => {
        // 配置BScroll函数
        this.leftScroll = new BScroll(".menu-wrapper", {
          click: true,
          mouseWheel: true, //开启鼠标滚轮
          disableMouse: false, //启用鼠标拖动
          disableTouch: false, //启用手指触摸
        });
        this.rightScroll = new BScroll(".foods-wrapper", {
          probeType: 3,
          click: true,
          mouseWheel: true, //开启鼠标滚轮
          disableMouse: false, //启用鼠标拖动
          disableTouch: false, //启用手指触摸
        });
        // 绑定scroll事件
        this.rightScroll.on("scroll", (position) => {
          this.rScroll = -position.y;
        });
        // 若觉得probetype为3计算过大可以设置为2,使用scrollEnd修改this.rScroll
        // food.on("scrollEnd", (position) => {
        //   this.rScroll = -position.y
        // });

        // 获取每个food数组的top值
        let top = 0;
        this.goodTops.push(top);
        Array.from(this.$refs.rightFoods.children).forEach((food) => {
          top += food.clientHeight;
          this.goodTops.push(top);
        });
      });
    },
  },
  components: {
    ShopCar, Food
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.goods {
  display: flex;
  position: absolute;
  top: 225px;
  bottom: 46px;
  width: 100%;
  background: #fff;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;

      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        color: $green;
        font-weight: 700;

        .text {
          border-none();
        }
      }

      .icon {
        display: inline-block;
        vertical-align: middle;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        margin-top: 20px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        bottom-border-1px(rgba(7, 17, 27, 0.1));
        font-size: 12px;
      }
    }
  }

  .foods-wrapper {
    flex: 1;

    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }

    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      bottom-border-1px(rgba(7, 17, 27, 0.1));

      &:last-child {
        border-none();
        margin-bottom: 0;
      }

      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }

      .content {
        flex: 1;

        // height 100vh
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .desc, .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }

        .desc {
          line-height: 12px;
          margin-bottom: 8px;
        }

        .extra {
          .count {
            margin-right: 12px;
          }
        }

        .price {
          font-weight: 700;
          line-height: 24px;

          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }

          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: -15px;
          bottom: 2px;
        }
      }
    }
  }
}
</style>


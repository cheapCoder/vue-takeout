<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{info.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :rating="info.serviceScore" size="36"></Star>
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :rating="info.foodScore" size="36"></Star>
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>

      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive" :class="{active: nowActive===2}" @click="nowActive = 2">
            全部
            <span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" :class="{active: nowActive===0}" @click="nowActive = 0">
            满意
            <span class="count">{{positionCount}}</span>
          </span>
          <span class="block negative" :class="{active: nowActive===1}" @click="nowActive = 1">
            不满意
            <span class="count">{{ratings.length - positionCount}}</span>
          </span>
        </div>
        <div class="switch" @click="showText=!showText">
          <span
            class="iconfont iconanniu1"
            :class="{on: showText==true}"
            
          ></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating, index) in filterRatings" :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar" />
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <Star :rating="info.foodScore" size="24"></Star>
                <span class="delivery">{{rating.deliveryTime || "无"}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
              </div>
              <div class="time">{{rating.rateTime | date-formate}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import dayjs from "dayjs";
import BScroll from "@better-scroll/core";
import MouseWheel from '@better-scroll/mouse-wheel'

BScroll.use(MouseWheel)
export default {
  name: 'ratings',
  data() {
    return {
      nowActive: 2,
      showText: false,
      nowRatings: [],
    };
  },
  async mounted() {
    this.ratings.forEach((val) => {
      this.nowRatings.push(val);
    });
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  watch: {
    filterRatings() {
      this.$nextTick(() => {
        this.initScroll();
      });
    },
  },
  computed: {
    ...mapState({
      ratings: (state) => state.shop.shopMsg.ratings || [],
      info: (state) => state.shop.shopMsg.info || {},
    }),
    positionCount() {
      // 计算好评的数目
      let count;
      if (JSON.stringify(this.ratings) !== "{}") {
        count = !this.ratings
          ? 0
          : this.ratings.reduce((pre, val) => {
              return pre + (val.rateType ? 0 : 1);
            }, 0);
      }
      return count || 0;
    },

    filterRatings() {
      return  this.ratings.filter((val) => {
        return (
          (this.nowActive === 2 || val.rateType === this.nowActive) &&
          (!this.showText || val.text)
        );
      });
    },
  },
  methods: {
    initScroll() {
      if (this.scroll) {
        this.scroll.refresh();
      } else {
        this.scroll = new BScroll(".ratings", {
          click: true,
          mouseWheel: true, //开启鼠标滚轮
          disableMouse: false, //启用鼠标拖动
          disableTouch: false, //启用手指触摸
        });
      }
    },    
  },
  filters: {
    dateFormate(val) {
      return dayjs(val).format("YYYY-MM-DD HH:mm");
    },
  },
};
</script>


<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.ratings {
  position: absolute;
  top: 225px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: #fff;

  .overview {
    display: flex;
    padding: 18px 0;

    .overview-left {
      flex: 0 0 137px;
      padding: 6px 0;
      width: 137px;
      border-right: 1px solid rgba(7, 17, 27, 0.1);
      text-align: center;

      @media only screen and (max-width: 320px) {
        flex: 0 0 120px;
        width: 120px;
      }

      .score {
        margin-bottom: 6px;
        line-height: 28px;
        font-size: 24px;
        color: rgb(255, 153, 0);
      }

      .title {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: 12px;
        color: rgb(7, 17, 27);
      }

      .rank {
        line-height: 10px;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
    }

    .overview-right {
      flex: 1;
      padding: 6px 0 6px 24px;

      @media only screen and (max-width: 320px) {
        padding-left: 6px;
      }

      .score-wrapper {
        margin-bottom: 8px;
        font-size: 0;

        .title {
          display: inline-block;
          line-height: 18px;
          vertical-align: top;
          font-size: 12px;
          color: rgb(7, 17, 27);
        }

        .star {
          display: inline-block;
          margin: 0 12px;
          vertical-align: top;
        }

        .score {
          display: inline-block;
          line-height: 18px;
          vertical-align: top;
          font-size: 12px;
          color: rgb(255, 153, 0);
        }
      }

      .delivery-wrapper {
        font-size: 0;

        .title {
          line-height: 18px;
          font-size: 12px;
          color: rgb(7, 17, 27);
        }

        .delivery {
          margin-left: 12px;
          font-size: 12px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }

  .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7;
  }

  .ratingselect {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      // border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0;

      .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        font-size: 12px;
        color: rgb(77, 85, 93);
        background: rgba(77, 85, 93, 0.2);

        &.active {
          background: $green;
          color: #fff;
          box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
        }

        .count {
          margin-left: 2px;
          font-size: 8px;
        }
      }
    }

    .switch {
      padding: 12px 18px;
      line-height: 24px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      color: rgb(147, 153, 159);
      font-size: 0;

      .iconanniu1 {
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        font-size: 24px;

        &.on {
          color: $green;
        }
      }
      .text {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
      }
    }
  }

  .rating-wrapper {
    padding: 0 18px;

    .rating-item {
      display: flex;
      padding: 18px 0;
      bottom-border-1px(rgba(7, 17, 27, 0.1));

      .avatar {
        flex: 0 0 28px;
        width: 28px;
        margin-right: 12px;

        img {
          border-radius: 50%;
        }
      }

      .content {
        position: relative;
        flex: 1;

        .name {
          margin-bottom: 4px;
          line-height: 12px;
          font-size: 10px;
          color: rgb(7, 17, 27);
        }

        .star-wrapper {
          margin-bottom: 6px;
          font-size: 0;

          .star {
            display: inline-block;
            margin-right: 6px;
            vertical-align: top;
          }

          .delivery {
            display: inline-block;
            vertical-align: top;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }

        .text {
          margin-top: 10px;
          margin-bottom: 8px;
          line-height: 18px;
          color: rgb(7, 17, 27);
          font-size: 12px;
        }

        .recommend {
          line-height: 16px;
          font-size: 0;

          .icon-thumb_up, .icon-thumb_down, .item {
            display: inline-block;
            margin: 0 8px 4px 0;
            font-size: 9px;
          }

          .icon-thumb_up {
            color: $yellow;
          }

          .icon-thumb_down {
            color: rgb(147, 153, 159);
          }

          .item {
            padding: 0 6px;
            border: 1px solid rgba(7, 17, 27, 0.1);
            border-radius: 1px;
            color: rgb(147, 153, 159);
            background: #fff;
          }
        }

        .time {
          position: absolute;
          top: 0;
          right: 0;
          line-height: 12px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
}
</style>

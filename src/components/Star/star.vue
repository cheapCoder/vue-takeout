<template>
  <div class="star star-24">
    <span class="star-item" :class="type" v-for="(type, index) in ratingNum" :key="index"></span>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    size: String,
    rating: Number,
  },
  mounted() {
    let arr = [];
    for (let i = 0; i < Math.floor(this.rating); i++) {
      arr.push("on");
    }
    this.rating % 1 > 0 && arr.push("half");
    for (let index = Math.ceil(this.rating); index < 5; index++) {
      arr.push("off");
    }
  },
  computed: {
    ratingNum() {
      let arr = [];
      for (let i = 0; i < Math.floor(this.rating); i++) {
        arr.push("on");
      }
      this.rating % 1 > 0 && arr.push("half");
      for (let index = Math.ceil(this.rating); index < 5; index++) {
        arr.push("off");
      }
      return arr;
    },
  },
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.star { // 2x图 3x图
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/star48_on');
      }

      &.half {
        bg-image('./images/star48_half');
      }

      &.off {
        bg-image('./images/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/star36_on');
      }

      &.half {
        bg-image('./images/star36_half');
      }

      &.off {
        bg-image('./images/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/star24_on');
      }

      &.half {
        bg-image('./images/star24_half');
      }

      &.off {
        bg-image('./images/star24_off');
      }
    }
  }
}
</style>
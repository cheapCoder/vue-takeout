### record my little issue :>

1. 商家页面第一次进入无法滚动商品和分类 
    分析：`src/pages/Shop/ShopGoods.vue `必须等页面的数据`shopMsg`加载完成`new BScroll`才能让betterScroll正确管理完整数据，所以应用watch监视shopMsg，有数据后再`new``
    new issue： shopCar修改源码后仍需刷新才能滚动，猜测是$nextTick的问题
<br>

   使用BetterScroll刚`npm run serve`时无法进行滑动，需要修改BetterScroll的源码，
      修改`BetterSC/shared-utils/src/dom.ts` 中的常量hasTouch为true, 
      这样就可以在初始化时对参数进行设置,把一切掌握在自己手中

      使用方法如下:
        new BScroll时,在参数options中加入

        mouseWheel: true,   //开启鼠标滚轮
        disableMouse: false,   //启用鼠标拖动
        disableTouch: false    //启用手指触摸
      参考博客：https://www.cnblogs.com/mldonkey/p/11421577.html
<br>

5. vuex的`commit`不要随便去掉state参数，以防传入其他参数被当成state
<br>

6. 父级组件可以直接调用子级组件的方法，借助`ref`
<br>

7. 注意过渡类名在过渡结束后都会删除，用动画animation才不会删除(记录路径：`src/components/shopCar/shopCar.vue`的`style`)
<br>

8. 注意`$nextTick`的使用，特别是使用`better-scroll`时
<br>

- 尝试使用history模式。。。(nginx配置报错。。。)
## 介绍


> 此demo利用Vue,利用Vue-Router + Vue-Cli工程化构建外卖信息展示单页面应用，使用vuex管理主要的商家数据,利用axios的拦截器设置请求参数,利用mock.js模拟后台接口，使用mint-ui完成部分组件功能，并用fastclick和postcss-px2rem解决移动端适配问题和300ms延迟问题



#### 登陆页

- 利用`localStorage`实现登陆用户信息保存和自动登陆检查功能
- 使用Vue I18n练习部分国际化
- 使用容联云的免费短信验证码服务进行验证码验证
- 利用正则进行电话号码格式验证

<img alt="手机登陆" src="./otherPic/手机登陆.png" style="display: inline-block; width: 80px; zoom: 33%;"><img alt="密码登陆" src="./otherPic/密码登陆.png" style="display: inline-block; width: 80px; zoom: 33%;">

<br>

#### 一级路由页面(商家列表页，个人信息页)

<img alt="商家展示" src="./otherPic/商家展示.png" style="display: inline-block; width: 80px; zoom: 33%;"><img alt="登陆退出" src="./otherPic/登陆退出.png" style="display: inline-block; width: 80px; zoom: 33%;">


<br>

#### 商家页

- 利用better-scroll进行滑动效果设置并修复了商品顶端上滑和商品低端下滑时左侧分类列表不会显示当前分类的bug
- 利用watch监视商品信息的变化以修复刷新和路由切换导致无法滚动的bug
- 自定义了购物车添加按钮组件以进行多次复用，并进行了函数节流以限制添加速度

<img alt="商家评价" src="./otherPic/商家评价.png" style="display: inline-block; width: 80px; zoom: 33%;"><img alt="商家信息" src="./otherPic/商家信息.png" style="display: inline-block; width: 80px; zoom: 33%;"><img alt="商品列表" src="./otherPic/商品列表.png" style="display: inline-block; width: 80px; zoom: 33%;"><img alt="购物车" src="./otherPic/购物车.png" style="display: inline-block; width: 80px; zoom: 33%;"><img alt="商家信息卡片" src="./otherPic/商家信息卡片.png" style="display: inline-block; width: 80px; zoom: 33%;">



## 问题记录

1. 商家页面第一次进入无法滚动商品和分类 
   **分析**：`src/pages/Shop/ShopGoods.vue `必须等页面的数据`shopMsg`加载完成`new BScroll`才能让betterScroll正确管理完整数据，所以应用watch监视shopMsg，有数据后再`new``
   new issue： shopCar修改源码后仍需刷新才能滚动，猜测是$nextTick的问题
   <br>

   使用BetterScroll刚`npm run serve`时无法进行滑动，需要修改BetterScroll的源码，
      修改`BetterSC/shared-utils/src/dom.ts` 中的常量hasTouch为true, 
      这样就可以在初始化时对参数进行设置,把一切掌握在自己手中

     **使用方法**如下:
        new BScroll时,在参数options中加入

        mouseWheel: true,   //开启鼠标滚轮
        disableMouse: false,   //启用鼠标拖动
        disableTouch: false    //启用手指触摸

      参考博客：https://www.cnblogs.com/mldonkey/p/11421577.html
   <br>

2. vuex的`commit`不要随便去掉state参数，以防传入其他参数被当成state
   <br>

3. 父级组件可以直接调用子级组件的方法，借助`ref`
   <br>

4. 注意过渡类名在过渡结束后都会删除，用动画animation才不会删除(记录路径：`src/components/shopCar/shopCar.vue`的`style`)
   <br>

5. 注意`$nextTick`的使用，特别是使用`better-scroll`时
   <br>

6. 尝试使用history模式。。。(nginx配置报错，待解)
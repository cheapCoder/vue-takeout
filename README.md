## 前端冲冲冲

#### demo介绍


> 此demo利用Vue,利用Vue-Router + Vue-Cli工程化构建外卖信息展示单页面应用，使用vuex管理主要的商家数据,利用axios的拦截器设置请求参数,利用mock.js模拟后台接口，并用fastclick和postcss-px2rem解决移动端适配问题和300ms延迟问题



###### 登陆页

- 利用`localStorage`实现登陆用户信息保存和自动登陆检查功能
- 使用Vue I18n练习部分国际化
- 使用容联云的免费短信验证码服务进行验证码验证
- 利用正则进行电话号码格式验证

<img alt="手机登陆" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/手机登陆.png" style="display: inline-block; width: 180px">
<img alt="密码登陆" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/密码登陆.png" style="display: inline-block; width: 180px">
<br>

###### 一级路由页面(商家列表页，个人信息页)

<img alt="商家展示" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/商家展示.png" style="display: inline-block; width: 180px">

<img alt="登陆退出" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/登陆退出.png" style="display: inline-block; width: 180px">
<br>

###### 商家页

- 利用better-scroll进行滑动效果设置并修复了商品顶端上滑和商品低端下滑时左侧分类列表不会显示当前分类的bug
- 利用watch监视商品信息的变化以修复刷新和路由切换导致无法滚动的bug
- 自定义了购物车添加按钮组件以进行多次复用，并进行了函数节流以限制添加速度


<img alt="商家评价" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/商家评价.png" style="display: inline-block; width: 180px">
<img alt="商家信息" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/商家信息.png" style="display: inline-block; width: 180px">
<img alt="商品列表" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/商品列表.png" style="display: inline-block; width: 180px">
<img alt="购物车" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/购物车.png" style="display: inline-block; width: 180px">
<img alt="商家信息卡片" src="https://github.com/necessityOVO/vueTakeout/blob/master/otherPic/商家信息卡片.png" style="display: inline-block; width: 180px">

const Msite = () => import('../pages/Msite/Msite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Search = () => import('../pages/Search/Search.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue';
import Shop from "../pages/Shop/Shop.vue"
import ShopGoods from "../pages/Shop/ShopGoods.vue"
import ShopInfo from "../pages/Shop/ShopInfo.vue"
import ShopRatings from "../pages/Shop/ShopRatings.vue"

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/msite',
    component: Msite,
    meta: {
      isFooterGuideShow: true
    },
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isFooterGuideShow: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isFooterGuideShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isFooterGuideShow: true
    },
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop/:id',
    component: Shop,
    children: [
      {
        path: '/shop/:id/goods',
        component: ShopGoods,
      },
      {
        path: '/shop/:id/shopInfo',
        component: ShopInfo,
      },
      {
        path: '/shop/:id/shopRatings',
        component: ShopRatings,
      },
      {
        path: '',
        redirect: "/shop/:id/goods"
      }
    ]
  },
  

]
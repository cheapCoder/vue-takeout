import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue';
import Shop from "../pages/Shop/Shop.vue"

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
    }
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
    children: [
      {
        path: 'shop',
        component: Shop
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]
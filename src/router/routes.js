import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/login.vue'

export default [
  {
    path: '/',
    redirect: '/msite'
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
    }
  },
  {
    path: '/login',
    component: Login
  }
]
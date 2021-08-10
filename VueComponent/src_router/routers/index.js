import Vue from 'vue'
import home from '../pages/Home.vue';
import about from '../pages/about.vue';
import news from '../pages/News.vue';
import message from '../pages/Message.vue';
import messageDetail from '../pages/MessageDetail.vue'
import VueRouter from 'vue-router';


Vue.use(VueRouter);
export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '*', component: home },
    {
      path: "/home",
      component: home
    },
    {
      path: "/about",
      component: about,
      children: [
        {
          path: 'news',
          component: news
        },
        {
          path: 'messages',
          component: message,
          children: [
            {
              name: 'messageDetail',
              path: 'messageDetail/:id',
              component: messageDetail,
              props: (route) => ({ id: route.params.id, name: route.query.name })
            },
            // {
            //   path: '/',
            //   redirect: 'messageDetail/1'
            // }
          ]
        },
        {
          path: '',
          redirect: 'news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
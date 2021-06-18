import { createRouter, createWebHashHistory } from 'vue-router'
import Resume from '@/views/Resume.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/resume'
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
    // ,
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
export default router;

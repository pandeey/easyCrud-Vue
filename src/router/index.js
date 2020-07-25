import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fans from '../components/fans'
import table from '../components/table'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI
)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/table'
    },
    {
      path: '/fans',
      component: fans
    },
    {
      path: '/table',
      component: table
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

export default router

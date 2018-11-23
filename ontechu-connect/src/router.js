import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HomePage',
      component: () => import('./views/HomePage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      components: {
        default: Dashboard,
        content: () => import('./views/Home.vue')
      },
      children: [{
        path:"",
        components: {
          default: Dashboard,
          content: () => import('./views/Home.vue')
        }
      }, {
        path:"about",
        components: {
          default: Dashboard,
          content: () => import('./views/About.vue')
        }
      }, {
        path:"designer",
        components: {
          default: Dashboard,
          content: () => import('./views/Designer.vue')
        }
      }]
    },
    {
      path: '/designer',
      name: 'designer',
      component: () => import('./views/Designer.vue'),
      props: {
        title: "Designer"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      props: {
        title: "About"
      }
    }
  ]
})
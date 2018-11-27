import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            components: {
                default: () => import('./views/Dashboard.vue'),
                content: () => import('./views/Home.vue')
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        }
    ]
})

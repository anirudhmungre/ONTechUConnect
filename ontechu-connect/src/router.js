import Vue from 'vue'
import Router from 'vue-router'

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
            },
            children: [
                {
                    path: '/about',
                    name: 'about',
                    components: {
                        default: () => import('./views/Dashboard.vue'),
                        content: () => import('./views/About.vue')
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('./views/Logout.vue')
        }
    ]
})

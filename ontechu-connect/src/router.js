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
                    path: 'home',
                    name: 'home',
                    components: {
                        default: () => import('./views/Dashboard.vue'),
                        content: () => import('./views/Home.vue')
                    }
                },
                {
                    path: 'courses/enrolled',
                    components: {
                        default: () => import('./views/Dashboard.vue'),
                        content: () => import('./views/Enrolled.vue')
                    }
                },
                {
                    path: 'courses/lookup',
                    components: {
                        default: () => import('./views/Dashboard.vue'),
                        content: () => import('./views/Lookup.vue')
                    }
                },
                {
                    path: 'admin',
                    components: {
                        default: () => import('./views/Dashboard.vue'),
                        content: () => import('./views/Admin.vue')
                    }
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: () => import('./views/HomePage.vue')
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
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/RegisterQueueWaitlist.vue')
        },
        {
            path: '/courses/register',
            name: 'register',
            component: () => import('./views/RegisterQueueWaitlist.vue')
        }
    ]
})

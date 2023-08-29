import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/components/Home.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/Login.vue'),
            },
            {
                path: 'ppt-dashboard',
                name: 'PPT-Dashboard',
                component: () => import('@/views/PostpartumView/Dashboard.vue')
            }
        ],
    },

]
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    // mode: "hash",
    routes,
})

export default router
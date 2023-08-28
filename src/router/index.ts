import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SearchUsersPage from '@/pages/SearchUsersPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'search_users',
        component: SearchUsersPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

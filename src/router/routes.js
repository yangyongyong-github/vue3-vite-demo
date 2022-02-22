// import Home from '@/views/home'
// const Home = { template: '<h1>Home</h1>' }
const NotFound = { template: '<div>404</div>' }

import Todos from '../views/todos/index.vue'
import Home from '../views/home/index.vue'
import GDP from '../views/GDP/index.vue'
// import { getAsyncPage } from "../util/asyncComp"

// const Todos = getAsyncPage('../views/todos')

export default [
    {
        name: 'home',
        component: Home,
        path: '/',
        meta: {}
    },
    {
        name: 'todos',
        component: Todos, // () => import(),
        path: '/todos',
        meta: {}
    },
    {
        name: 'GDP',
        component: GDP, // () => import('../views/GDP/index.vue'),
        path: '/GDP',
        meta: {}
    },
    {
        name: 'async-comp',
        component: () => import('../views/async-comp/index.vue'),
        path: '/async-comp',
        meta: {}
    },
    {
        name: 'not-found',
        component: NotFound,
        path: '/:pathMatch(.*)*' // 取代 * (使用自定义的 regex 参数)

    }
]
// import Home from '@/views/home'
const Home = { template: '<div>Home</div>' }
const NotFound = { template: '<div>404</div>' }

import Todos from '../views/todos/index.vue'

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
        name: 'about',
        component: () => import('../views/about/index.vue'),
        path: '/about',
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
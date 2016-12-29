import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home.vue'
import Portfolio from '../components/Portfolio.vue'
import Stocks from '../components/Stocks.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    }, {
        path: '/stocks',
        name: 'stocks',
        component: Stocks
    }
]

export const router = new VueRouter({
    routes
})
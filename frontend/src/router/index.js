import Vue from 'vue';
import Router from 'vue-router'
import Home from '.././views/Home'
import AddWeight from '.././views/AddWeight'
import Login from '.././views/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/addWeight',
            name: 'Add weight',
            component: AddWeight
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
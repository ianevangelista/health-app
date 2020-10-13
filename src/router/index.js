import Vue from 'vue';
import Router from 'vue-router'
import Login from '.././views/Login'
import AddWeight from '.././views/AddWeight'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/addWeight',
            name: 'Add weight',
            component: AddWeight
        }
    ]
})
import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Weight from './modules/weight'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        'user': User,
        'weight': Weight
    }
})
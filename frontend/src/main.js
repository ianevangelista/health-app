import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from "./store/index"

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false
router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requiresLogin)){
    if(!store.getters['user/isAuthenticated'])next({name: 'Login'});
    else next();
  }else next();
})
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

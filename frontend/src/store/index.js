import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentWeight: {
            weight: 64,
            date: null
        },
        allWeights: []
    },
    mutations: {
        //sync
        setCurrentWeight(state, payload){
            state.currentWeight = payload;
            state.allWeights.push(payload);
        }
    },
    actions: {
        //async
        
    },
    modules:{},
    getters:{
        getCurrentWeight: state => state.currentWeight,
        getAllWeights: state => state.allWeights
    },
})
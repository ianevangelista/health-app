import Vue from 'vue'
import Vuex from 'vuex'
import WeightService from '../service/WeightService'
import LoginService from '../service/LoginService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: null,
        refreshToken: null,
        allWeights: []
    },
    mutations: {
        //sync
        updateStorage(state,{access, refresh}){
            state.accessToken = access
            state.refreshToken = refresh
        },
        setCurrentWeight(state, payload){
            console.log("setter ny vekt");
            state.currentWeight = payload;
            console.log("satt ny vekt");

            state.allWeights.push(payload);
            console.log("pusha ny vekt");
            console.log(state.allWeights);


        },
        setAllWeights(state, payload){
            state.allWeights = payload;
        }
        
    },
    actions: {
        //async
        login(context, credentials){
            return new Promise((resolve, reject)=>
                LoginService.login(credentials)
                .then(response=>{
                    context.commit('updateStorage', {access: response.access, refresh: response.refresh})
                    resolve();
                })
                .catch(err=>{
                    reject()
                    console.log(err);
                })    
            )
        },
        loadAllWeights({commit}, token){
            WeightService.getAllWeights(token).then(response=>{
                commit('setAllWeights', response);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    modules:{},
    getters:{
        getCurrentWeight: state => state.allWeights,
        getAllWeights: state => state.allWeights,
        getAccessToken: state => state.accessToken,
    },
})
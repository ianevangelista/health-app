import Vue from 'vue'
import Vuex from 'vuex'
import WeightService from '../service/WeightService'
import LoginService from '../service/LoginService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isTokenFetched: false,
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
            console.log(state.currentWeight);

            state.allWeights.push(payload);
            console.log("pusha ny vekt");
            console.log(state.allWeights);


        },
        setAllWeights(state, payload){
            state.allWeights = payload;
        },
        setIsTokenFetched(state, payload){
            state.isTokenFetched = payload;
        },
        removeToken(state){
            state.accessToken = null;
            state.refreshToken = null;
        }
        
    },
    actions: {
        //async
        login({commit}, credentials){
            return new Promise((resolve, reject)=>
                LoginService.login(credentials)
                .then(response=>{
                    commit('updateStorage', {access: response.access, refresh: response.refresh})
                    resolve();
                })
                .catch(err=>{
                    reject()
                    console.log(err);
                })    
            )
        },
        logout(context){
            if(context.getters.isUserLoggedIn) context.commit('removeToken');
        },
        loadAllWeights({commit}, token){
            if(!this.state.isTokenFetched){
                WeightService.getAllWeights(token).then(response=>{
                    commit('setIsTokenFetched', true);
                    commit('setAllWeights', response);
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
        
    },
    modules:{},
    getters:{
        getCurrentWeight: state => state.allWeights,
        getAllWeights: state => state.allWeights,
        getAccessToken: state => state.accessToken,
        isUserLoggedIn: state => state.accessToken != null
    },
})
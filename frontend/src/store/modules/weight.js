import WeightService from '../../service/WeightService'

export default {
    namespaced: true,
    state: {
        allWeights: []
    },
    mutations: {    
        setCurrentWeight(state, payload){
            console.log(state.allWeights);
            state.allWeights.push(payload);
            console.log(state.allWeights);
        },
        setAllWeights(state, payload){
            state.allWeights = payload;
            console.log(state.allWeights + "allle satt");
        }
    },
    actions: {
        loadAllWeights({commit, rootState}){
            if(!this.state.isTokenFetched){
                WeightService.getAllWeights(rootState.user.accessToken).then(response=>{
                    console.log(response);
                    commit('user/setIsTokenFetched', true, { root: true });
                    commit('setAllWeights', response);
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        },
        addWeight({commit, rootState}, data){
            WeightService.addWeight(rootState.user.accessToken, data).then(response=>{
                commit('setCurrentWeight', response)
            })
            .catch(err=>console.log(err))
        }
        
    },
    getters:{
        getCurrentWeight: state => state.allWeights,
        getAllWeights: state => state.allWeights,
    },
}
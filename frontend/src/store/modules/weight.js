import WeightService from '../../service/WeightService'

export default {
    namespaced: true,
    state: {
        allWeights: 'hei'
    },
    mutations: {    
        setCurrentWeight(state, payload){
            state.allWeights.push(payload);
        },
        setAllWeights(state, payload){
            state.allWeights = payload;            
        }
    },
    actions: {
        loadAllWeights({commit, rootState}){
            if(!this.state.isTokenFetched){
                WeightService.getAllWeights(rootState.user.accessToken).then(response=>{
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
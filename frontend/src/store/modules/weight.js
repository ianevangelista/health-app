import WeightService from '../../service/WeightService'

export default {
    state: {
        allWeights: []
    },
    mutations: {    
        setCurrentWeight(state, payload){
            state.currentWeight = payload;
            console.log(state.allWeights);
            state.allWeights.push(payload);
            console.log(state.allWeights);
        },
        setAllWeights(state, payload){
            state.allWeights = payload;
        }
    },
    actions: {
        loadAllWeights({commit}){
            if(!this.state.isTokenFetched){
                WeightService.getAllWeights(this.state.accessToken).then(response=>{
                    commit('setIsTokenFetched', true);
                    commit('setAllWeights', response);
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        },
        addWeight({commit}, data){
            WeightService.addWeight(this.state.accessToken, data).then(response=>{
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
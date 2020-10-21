import LoginService from '../../service/LoginService'

export default {
    namespaced: true,
    state: {
        isTokenFetched: false,
        accessToken: null,
        refreshToken: null,
    },
    mutations: {
        updateStorage(state,{access, refresh}){
            state.accessToken = access
            state.refreshToken = refresh
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
                    reject(err);
                })    
            )
        },
        logout(context){
            if(context.getters.isUserLoggedIn) context.commit('removeToken');
        }
    },
    getters:{
        getAccessToken: state => state.accessToken,
        isUserLoggedIn: state => state.accessToken != null
    }
}
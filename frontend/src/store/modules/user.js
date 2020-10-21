import LoginService from '../../service/LoginService'

export default {
    namespaced: true,
    state: {
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
    },
    mutations: {
        updateStorage(state,{access, refresh}){
            state.accessToken = access
            state.refreshToken = refresh
        },
        setIsAuthenticated(state, payload){
            state.isAuthenticated = payload;
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
                    commit('setIsAuthenticated', true);
                    resolve();
                })
                .catch(err=>{
                    reject(err);
                })    
            )
        },
        logout(context){
            if(!context.getters.isUserLoggedIn) {
                context.commit('removeToken');
                context.commit('setIsAuthenticated', false);
            }
        }
    },
    getters:{
        getAccessToken: state => state.accessToken,
        isAuthenticated: state => (state.accessToken != null)
    }
}
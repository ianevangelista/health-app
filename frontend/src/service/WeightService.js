const axios = require("axios").default;
const baseURL = 'http://127.0.0.1:8000';

class WeightService {
    getAllWeights(token) {
        return axios
        .get(baseURL + '/weights/', {
            headers: {
                authorization: 'Bearer ' + token 
            }
        })
        .then(response=> response.data)
        .catch(err=>{
            console.log(err);
        });
    }

    addWeight(token, data){
        console.log(data);
        return axios
        .post(baseURL + '/weights/', data, {
            headers: {
                authorization: 'Bearer ' + token,
                accept: 'application/json',

            }
        })
        .then(response=>response.data)
        .catch(err=>console.log(err))
    }
}

export default new WeightService();

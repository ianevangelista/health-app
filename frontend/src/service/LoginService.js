const axios = require("axios").default;
const baseURL = 'http://127.0.0.1:8000';

class LoginService {
    login(credentials) {
        return axios
        .post(baseURL + '/api-token/', {
            username: credentials.username,
            password: credentials.password
        })
        .then(response=> response.data)
        .catch(err=>{
            console.log(err);
        });
    }
}

export default new LoginService();

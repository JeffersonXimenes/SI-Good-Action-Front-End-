import * as axios from 'axios';

const api = axios.create({
    baseURL : `https://cors-anywhere.herokuapp.com//http://localhost:5000`,
    json: true
});


export default api;
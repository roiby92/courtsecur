import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://courtsecur-default-rtdb.firebaseio.com/',
    headers: { "Access-Control-Allow-Origin": "*" } 
});

export default instance;
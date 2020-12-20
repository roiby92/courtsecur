import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://courtsecur-default-rtdb.firebaseio.com/'
});

export default instance;
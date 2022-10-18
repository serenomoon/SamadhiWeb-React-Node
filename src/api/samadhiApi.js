import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()

const samadhiApi = axios.create({
    baseURL: VITE_API_URL
});

// Todo: configurar interceptores
samadhiApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default samadhiApi;
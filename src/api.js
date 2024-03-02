import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('access');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});

instance.interceptors.response.use((response) => {
    return response;
}, async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;

        return instance.post('/refresh')
            .then(res => {
                if (res.status === 201) {
                    localStorage.setItem('access', res.data);

                    instance.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;

                    originalRequest.headers['Authorization'] = 'Bearer ' + res.data;
                    return instance(originalRequest);
                }
            })
    }

    return Promise.reject(error);
});

export default instance;
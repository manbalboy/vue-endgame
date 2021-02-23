import axios from 'axios';
import { setInterceptors } from './common/interceptors';
// 엑시오스 초기화 함수
function createInstance() {
    return axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });
}

function createInstanceWihtAuth(url) {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    });

    return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWihtAuth('posts');

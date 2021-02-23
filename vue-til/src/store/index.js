import Vue from 'vue';
import Vuex from 'vuex';
import {
    getUserFromCookie,
    getAuthFromCookie,
    saveAuthToCookie,
    saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || '',
    },
    getters: {
        isLogin(state) {
            return state.username === '' ? false : true;
        },
    },
    actions: {
        async LOGIN(context, userData) {
            try {
                const { data } = await loginUser(userData);
                console.log(data.token);

                context.commit('setToken', data.token);
                context.commit('setUsername', data.user.username);
                saveAuthToCookie(data.token);
                saveUserToCookie(data.user.username);
                return data;
            } catch (err) {
                console.log(err);
            }
        },
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        },
        clearToke(state) {
            state.token = '';
        },
    },
});

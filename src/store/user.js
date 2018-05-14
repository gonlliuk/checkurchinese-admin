import config from '../../configs/index';
import HttpService from '../services/http.service';

const http = new HttpService();

export default {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        setUser({ commit }, user) {
            commit('setUser', user);
        },
        signIn(context, data) {
            return http.post('/auth/in', data)
                .then((token) => {
                    window.localStorage.setItem(config.tokenName, token);
                    window.location = '/';
                });
        },

    },
};

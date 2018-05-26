import HttpService from '../services/http.service';

const http = new HttpService();

export default {
    namespaced: true,
    state: {
        home: null,
    },
    mutations: {
        setHome(state, home) {
            state.home = home;
        },
    },
    actions: {
        setHome({ commit }, homes) {
            commit('setHome', homes);
        },
        getHome({ dispatch }) {
            return http.get('/home')
                .then((home) => {
                    dispatch('setHome', home);
                });
        },
        createHome({ dispatch }, { title, welcome, text } = {}) {
            return http.put('/home', { title, welcome, text })
                .then(() => {
                    dispatch('getHome');
                });
        },
        editHome({ dispatch }, { id, title, welcome, text } = {}) {
            return http.patch(`/home/${id}`, { id, title, welcome, text })
                .then(() => {
                    dispatch('getHome');
                });
        },
        deleteHome({ dispatch }, { id }) {
            return http.delete(`/home/${id}`)
                .then(() => {
                    dispatch('getHome');
                });
        },
    },
};

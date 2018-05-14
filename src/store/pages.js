import HttpService from '../services/http.service';

const http = new HttpService();

export default {
    namespaced: true,
    state: {
        selectedPageId: null,
        pages: [],
    },
    getters: {
        selectedPage(state) {
            return state.pages.find(page => page.id === state.selectedPageId);
        },
    },
    mutations: {
        setPages(state, pages) {
            state.pages = pages;
        },
        setSelectedPage(state, selectedId) {
            state.selectedPageId = selectedId;
        },
    },
    actions: {
        setPages({ commit }, pages) {
            commit('setPages', pages);
        },
        setSelectedPage({ commit }, selectedId) {
            commit('setSelectedPage', selectedId);
        },
        getPages({ dispatch }) {
            return http.get('/page')
                .then((pages) => {
                    dispatch('setPages', pages);
                });
        },
        createPage({ dispatch }, data = {}) {
            return http.put('/page', data)
                .then(() => {
                    dispatch('getPages');
                });
        },
        editPage({ dispatch }, { id, title } = {}) {
            return http.patch(`/page/${id}`, { id, title })
                .then(() => {
                    dispatch('getPages');
                });
        },
        deletePage({ dispatch }, { id }) {
            return http.delete(`/page/${id}`)
                .then(() => {
                    dispatch('getPages');
                });
        },
    },
};

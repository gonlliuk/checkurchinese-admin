import HttpService from '../services/http.service';

const http = new HttpService();

export default {
    namespaced: true,
    state: {
        selectedBlockId: null,
        blocks: [],
    },
    getters: {
        selectedBlock(state) {
            return state.blocks.find(block => block.id === state.selectedBlockId);
        },
    },
    mutations: {
        setBlocks(state, blocks) {
            state.blocks = blocks;
        },
        setSelectedBlock(state, selectedId) {
            state.selectedBlockId = selectedId;
        },
    },
    actions: {
        setBlocks({ commit }, blocks) {
            commit('setBlocks', blocks);
        },
        setSelectedBlock({ commit }, selectedId) {
            commit('setSelectedBlock', selectedId);
        },
        getBlocks({ dispatch }) {
            return http.get('/block')
                .then((data) => {
                    dispatch('setBlocks', data);
                });
        },
        createBlock({ dispatch }, data = {}) {
            return http.put('/block', data)
                .then(() => {
                    dispatch('getBlocks');
                });
        },
        async editBlock({ dispatch }, { id, title, pageId } = {}) {
            return http.patch(`/block/${id}`, { id, title, pageId })
                .then(() => {
                    dispatch('getBlocks');
                });
        },
        deleteBlock({ dispatch }, { id, pageId }) {
            return http.delete(`/block/${id}/from/${pageId}`)
                .then(() => {
                    dispatch('getBlocks');
                });
        },
    },
};

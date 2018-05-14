import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import pages from './pages';
import blocks from './blocks';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        pages,
        blocks,
        tasks,
    },
    state: {
    },
    mutations: {
    },
    actions: {
    },
});

import HttpService from '../services/http.service';

const http = new HttpService();

export default {
    namespaced: true,
    state: {
        selectedTaskId: null,
        tasks: [],
    },
    getters: {
        selectedTask(state) {
            return state.tasks.find(task => task.id === state.selectedTaskId);
        },
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setSelectedTask(state, selectedId) {
            state.selectedTaskId = selectedId;
        },
    },
    actions: {
        setTasks({ commit }, tasks) {
            commit('setTasks', tasks);
        },
        setSelectedTask({ commit }, selectedId) {
            commit('setSelectedTask', selectedId);
        },
        getTasks({ dispatch }) {
            return http.get('/task')
                .then((data) => {
                    dispatch('setTasks', data);
                });
        },
        createTask({ dispatch }, data = {}) {
            return http.put('/task', data)
                .then(() => {
                    dispatch('getTasks');
                });
        },
        async editTask({ dispatch }, data = {}) {
            return http.patch(`/task/${data.id}`, data)
                .then(() => {
                    dispatch('getTasks');
                });
        },
        deleteTask({ dispatch }, { id, taskId }) {
            return http.delete(`/task/${id}/from/${taskId}`)
                .then(() => {
                    dispatch('getTasks');
                });
        },
    },
};

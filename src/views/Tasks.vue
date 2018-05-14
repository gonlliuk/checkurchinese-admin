<template>
    <div v-loading="loading">
        <el-row :gutter="40"
                v-show="!tasks.length">
            <el-col :span="12">
                <h4>Пока не создано ни одного задания</h4>
            </el-col>
        </el-row>
        <el-row :gutter="40"
                style="margin-bottom: 20px"
                v-show="tasks.length">
            <el-col>
                <h3>Задания: </h3>
                <div v-for="task in tasks"
                     :key="task.id"
                     style="padding: 10px; font-size: 17px">
                    <span>{{ task.title }}</span>
                    <el-button type="primary"
                               icon="el-icon-edit"
                               circle
                               style="margin-left: 20px"
                               @click="edit(task.id)"></el-button>
                </div>

            </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="6">
                <el-button type="primary" @click="create()">Создать задание</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            selectedId: null,
            loading: false,
        };
    },
    computed: {
        ...mapState('tasks', [
            'tasks',
        ]),
    },
    methods: {
        ...mapActions('tasks', [
            'getTasks',
            'setSelectedTask',
        ]),
        edit(selectedId) {
            this.setSelectedTask(selectedId);
            this.$router.push('/tasks/edit');
        },
        create() {
            this.setSelectedTask(null);
            this.$router.push('/tasks/create');
        },
    },
    created() {
        const timeout = setTimeout(() => { this.loading = true; }, 300);
        this.getTasks()
            .catch((e) => {
                this.$notify({
                    title: 'Error',
                    type: 'error',
                    message: `${e.message}: ${e.response.data}`,
                    duration: 0,
                });
            })
            .finally(() => {
                clearTimeout(timeout);
                this.loading = false;
            });
    },
};
</script>

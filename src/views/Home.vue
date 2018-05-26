<template>
    <div v-loading="loading">
        <el-row :gutter="40"
                v-if="!home">
            <el-col :span="12">
                <h4>Пока не создано главной страницы</h4>
            </el-col>
        </el-row>
        <el-row :gutter="40"
                style="margin-bottom: 20px"
                v-if="home">
            <el-col>
                <h3>Главная страница: </h3>
                <div style="padding: 10px; font-size: 17px">
                    <span>{{ home.title}}</span>
                    <el-button type="primary"
                               icon="el-icon-edit"
                               circle
                               style="margin-left: 20px"
                               @click="edit(home.id)"></el-button>
                </div>

            </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="6">
                <el-button v-if="!home" type="primary" @click="create()">Создать домашнее описание</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        data() {
            return {
                loading: false,
            };
        },
        computed: {
            ...mapState('home', [
                'home',
            ]),
        },
        methods: {
            ...mapActions('home', [
                'getHome',
            ]),
            async edit() {
                this.$router.push('/home/edit');
            },
            async create() {
                this.$router.push('/home/create');
            },
        },
        created() {
            const timeout = setTimeout(() => { this.loading = true; }, 300);
            this.getHome()
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

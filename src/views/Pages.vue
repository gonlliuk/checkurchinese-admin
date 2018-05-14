<template>
    <div v-loading="loading">
        <el-row :gutter="40"
                v-show="!pages.length">
            <el-col :span="12">
                <h4>Пока не создано ни одного раздела</h4>
            </el-col>
        </el-row>
        <el-row :gutter="40"
                style="margin-bottom: 20px"
                v-show="pages.length">
            <el-col>
                <h3>Разделы: </h3>
                <div v-for="page in pages"
                    :key="page.id"
                     style="padding: 10px; font-size: 17px">
                    <span>{{ page.title}}</span>
                    <el-button type="primary"
                               icon="el-icon-edit"
                               circle
                               style="margin-left: 20px"
                               @click="edit(page.id)"></el-button>
                </div>

            </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="6">
                <el-button type="primary" @click="create()">Создать раздел</el-button>
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
        ...mapState('pages', [
            'pages',
        ]),
    },
    methods: {
        ...mapActions('pages', [
            'getPages',
            'setSelectedPage',
        ]),
        async edit(selectedId) {
            await this.setSelectedPage(selectedId);
            this.$router.push('/pages/edit');
        },
        async create() {
            await this.setSelectedPage(null);
            this.$router.push('/pages/create');
        },
    },
    created() {
        const timeout = setTimeout(() => { this.loading = true; }, 300);
        this.getPages()
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

<template>
    <div v-loading="loading">
        <el-row :gutter="40"
                v-show="!blocks.length">
            <el-col :span="12">
                <h4>Пока не создано ни одного блока</h4>
            </el-col>
        </el-row>
        <el-row :gutter="40"
                style="margin-bottom: 20px"
                v-show="blocks.length">
            <el-col>
                <h3>Блоки: </h3>
                <div v-for="block in blocks"
                     :key="block.id"
                     style="padding: 10px; font-size: 17px">
                    <span>{{ block.title}}</span>
                    <el-button type="primary"
                               icon="el-icon-edit"
                               circle
                               style="margin-left: 20px"
                               @click="edit(block.id)"></el-button>
                </div>

            </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="6">
                <el-button type="primary" @click="create()">Создать блок</el-button>
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
        ...mapState('blocks', [
            'blocks',
        ]),
    },
    methods: {
        ...mapActions('blocks', [
            'getBlocks',
            'setSelectedBlock',
        ]),
        async edit(selectedId) {
            await this.setSelectedBlock(selectedId);
            this.$router.push('/blocks/edit');
        },
        async create() {
            await this.setSelectedBlock(null);
            this.$router.push('/blocks/create');
        },
    },
    created() {
        const timeout = setTimeout(() => { this.loading = true; }, 300);
        this.getBlocks()
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

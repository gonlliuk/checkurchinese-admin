<template>
    <div>
        <el-row :gutter="40"
                v-if="!pages.length">
            <el-col :span="12">
                <p>Пока не создано ни одного раздела</p>
            </el-col>
        </el-row>
        <el-row :gutter="40"
                v-if="pages.length">
            <el-col :span="6">
                <el-select v-model="selectedPageId"
                           placeholder="Выберите раздел">
                    <el-option v-for="page in pages"
                               :key="page.id"
                               :label="page.title"
                               :value="page.id"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="6">
                <el-button type="primary" @click="openPageCreateDialog()">Создать раздел</el-button>
            </el-col>
        </el-row>
        <PageEditDialog :opened.sync="isPageDialogOpened"
                        @save="savePage"/>
    </div>
</template>

<script>
import PageEditDialog from '../components/PageCreateDialog.vue';

export default {
    name: 'page',
    components: { PageEditDialog },
    data() {
        return {
            selectedPageId: undefined,
            pages: [],
            isPageDialogOpened: false,
        };
    },
    methods: {
        savePage(page) {
            this.pages.push({
                ...page,
                id: Math.random(),
            });
        },
        openPageCreateDialog() {
            this.isPageDialogOpened = true;
        },
    },
};
</script>

<template>
    <div>
        <h3>{{ title }}</h3>
        <el-form :model="form"
                 label-position="left"
                 label-width="150px"
                 ref="form"
                 :rules="rules">
            <el-form-item label="Название блока" prop="title">
                <el-input v-model="form.title" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Раздел" prop="pageId">
                <el-select v-model="form.pageId"
                           placeholder="Выберите раздел">
                    <el-option v-for="page in pages"
                               :key="page.id"
                               :label="page.title"
                               :value="page.id"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-row type="flex" justify="space-between">
            <el-col>
                <el-button type="primary" @click="createHandler()">{{ button }}</el-button>
                <el-button @click="close()">Отмена</el-button>
            </el-col>
            <el-row type="flex" justify="end">
                <el-button v-show="isEdit"
                           type="danger"
                           @click="deleteHandler()">Удалить</el-button>
            </el-row>
        </el-row>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    props: ['block', 'isEdit'],
    data() {
        return {
            loading: false,
            formName: 'form',
            form: this.block
                ? {
                    id: this.block.id,
                    title: this.block.title,
                    pageId: this.block.pageId,
                }
                : { title: '', pageId: null },
            rules: {
                title: [
                    { required: true, message: 'Ввевидте название блока', trigger: 'blur' },
                    { max: 100, message: 'Название блока должно содержать не более 100 символов', trigger: 'blur' },
                ],
                pageId: [
                    { required: true, message: 'Выберите раздел', trigger: 'blur' },
                ],
            },
        };
    },

    computed: {
        ...mapState('pages', [
            'pages',
        ]),
        title() {
            return this.isEdit ? 'Редактирование блока' : 'Создание блока';
        },
        button() {
            return this.isEdit ? 'Сохранить' : 'Создать';
        },
    },
    methods: {
        ...mapActions('blocks', [
            'createBlock',
            'editBlock',
            'deleteBlock',
        ]),
        reset() {
            this.$refs[this.formName].resetFields();
        },
        close() {
            this.reset();
            this.$router.push('/blocks');
        },
        createHandler() {
            this.$refs[this.formName].validate((valid) => {
                if (valid) {
                    const timeout = setTimeout(() => { this.loading = true; }, 300);
                    (this.isEdit
                        ? this.editBlock(this.form)
                        : this.createBlock(this.form)
                    )
                        .then(() => {
                            this.$notify({
                                title: 'Success',
                                type: 'success',
                                message: `Блок успешно ${this.isEdit ? 'сохранен' : 'создан'}`,
                            });
                            this.close();
                        })
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
                }
            });
        },
        deleteHandler() {
            this.$msgbox({
                title: 'Удаление блока',
                message: `Вы уверены что хотите удалить блок "${this.block.title}"?`,
                showCancelButton: true,
                confirmButtonText: 'Да',
                cancelButtonText: 'Нет',
            })
                .then(() => {
                    this.deleteBlock(this.block)
                        .then(() => {
                            this.$notify({
                                title: 'Success',
                                type: 'success',
                                message: `Блок "${this.block.title}" успешно удален`,
                            });
                            this.close();
                        })
                        .catch((e) => {
                            this.$notify({
                                title: 'Error',
                                type: 'error',
                                message: `${e.message}: ${e.response.data}`,
                                duration: 0,
                            });
                        });
                });
        },
    },
};
</script>

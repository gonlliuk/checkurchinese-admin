<template>
    <div>
        <h3>{{ title }}</h3>
        <el-form :model="form"
                 label-position="left"
                 label-width="150px"
                 ref="form"
                 :rules="rules">
            <el-form-item label="Название раздела" prop="title">
                <el-input v-model="form.title" auto-complete="off"></el-input>
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
import { mapActions } from 'vuex';

export default {
    name: 'createEditPageComponent',
    props: ['page', 'isEdit'],
    data() {
        return {
            loading: false,
            formName: 'form',
            form: this.page
                ? {
                    id: this.page.id,
                    title: this.page.title,
                }
                : { title: '' },
            rules: {
                title: [
                    { required: true, message: 'Ввевидте название раздела', trigger: 'blur' },
                    { max: 100, message: 'Название раздела должно содержать не более 100 символов', trigger: 'blur' },
                ],
            },
        };
    },
    computed: {
        title() {
            return this.isEdit ? 'Редактирование раздела' : 'Создание раздела';
        },
        button() {
            return this.isEdit ? 'Сохранить' : 'Создать';
        },
    },
    methods: {
        ...mapActions('pages', [
            'createPage',
            'editPage',
            'deletePage',
        ]),
        reset() {
            this.$refs[this.formName].resetFields();
        },
        close() {
            this.reset();
            this.$router.push('/pages');
        },
        createHandler() {
            this.$refs[this.formName].validate((valid) => {
                if (valid) {
                    const timeout = setTimeout(() => { this.loading = true; }, 300);
                    (this.isEdit
                        ? this.editPage(this.form)
                        : this.createPage(this.form)
                    )
                        .then(() => {
                            this.$notify({
                                title: 'Success',
                                type: 'success',
                                message: `Раздел успешно ${this.isEdit ? 'сохранен' : 'создан'}`,
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
                title: 'Удаление раздела',
                message: `Вы уверены что хотите удалить раздел "${this.page.title}"?`,
                showCancelButton: true,
                confirmButtonText: 'Да',
                cancelButtonText: 'Нет',
            })
                .then(() => {
                    this.deletePage(this.page)
                        .then(() => {
                            this.$notify({
                                title: 'Success',
                                type: 'success',
                                message: `Раздел "${this.page.title}" успешно удален`,
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

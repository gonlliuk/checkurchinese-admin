<template>
    <div>
        <h3>{{ title }}</h3>
        <el-form :model="form"
                 label-position="left"
                 label-width="150px"
                 ref="form"
                 :rules="rules">
            <el-form-item label="Название сайта" prop="title">
                <el-input v-model="form.title" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Приветствие" prop="welcome">
                <el-input v-model="form.welcome" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Описание в HTML" prop="text">
                <el-input type="textarea" v-model="form.text" auto-complete="off"></el-input>
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
        name: 'createEditHomeComponent',
        props: ['home', 'isEdit'],
        data() {
            return {
                loading: false,
                formName: 'form',
                form: this.home
                    ? {
                        id: this.home.id,
                        title: this.home.title,
                        welcome: this.home.welcome,
                        text: this.home.text,
                    }
                    : { title: '', welcome: '', text: '' },
                rules: {
                    title: [
                        { required: true, message: 'Ввевидте название главная страница', trigger: 'blur' },
                        { max: 100, message: 'Название главная страница должно содержать не более 100 символов', trigger: 'blur' },
                    ],
                    welcome: [
                        { required: true, message: 'Ввевидте название главная страница', trigger: 'blur' },
                        { max: 100, message: 'Название главная страница должно содержать не более 100 символов', trigger: 'blur' },
                    ],
                },
            };
        },
        computed: {
            title() {
                return this.isEdit ? 'Редактирование главная страница' : 'Создание главная страница';
            },
            button() {
                return this.isEdit ? 'Сохранить' : 'Создать';
            },
        },
        methods: {
            ...mapActions('home', [
                'createHome',
                'editHome',
                'deleteHome',
            ]),
            reset() {
                this.$refs[this.formName].resetFields();
            },
            close() {
                this.reset();
                this.$router.push('/home');
            },
            createHandler() {
                this.$refs[this.formName].validate((valid) => {
                    if (valid) {
                        const timeout = setTimeout(() => { this.loading = true; }, 300);
                        (this.isEdit
                                ? this.editHome(this.form)
                                : this.createHome(this.form)
                        )
                            .then(() => {
                                this.$notify({
                                    title: 'Success',
                                    type: 'success',
                                    message: `Главная страница успешно ${this.isEdit ? 'сохранен' : 'создан'}`,
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
                    title: 'Удаление главная страница',
                    message: `Вы уверены что хотите удалить главная страница"${this.home.title}"?`,
                    showCancelButton: true,
                    confirmButtonText: 'Да',
                    cancelButtonText: 'Нет',
                })
                    .then(() => {
                        this.deleteHome(this.home)
                            .then(() => {
                                this.$notify({
                                    title: 'Success',
                                    type: 'success',
                                    message: `Главная страница "${this.home.title}" успешно удален`,
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

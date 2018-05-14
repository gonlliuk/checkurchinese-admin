<template>
    <el-container>
        <el-header>
            <el-row type="flex" justify="center">
                <h1>Login Page</h1>
            </el-row>
        </el-header>
        <el-main>
            <el-row type="flex" justify="center" style="margin-top: 200px">
                <el-col :xs="20" :sm="16" :md="10" :lg="6">
                    <el-form :model="form"
                             label-position="left"
                             label-width="100px"
                             ref="form"
                             :rules="rules">
                        <el-form-item label="Email" prop="email">
                            <el-input type="text" v-model="form.email" auto-complete="off"/>
                        </el-form-item>
                        <el-form-item label="Пароль" prop="password">
                            <el-input type="password" v-model="form.password" auto-complete="off"/>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :xs="10" :sm="6" :md="4" :lg="2">
                    <el-button type="primary" @click="signInHandler()" style="width: 100%">
                        Войти
                    </el-button>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            formName: 'form',
            form: {
                email: '',
                password: '',
            },
            rules: {
                email: [
                    { required: true, message: 'Ввевидте email', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Ввевидте пароль', trigger: 'blur' },
                ],
            },
        };
    },
    methods: {
        ...mapActions('user', [
            'signIn',
        ]),
        signInHandler() {
            this.$refs[this.formName].validate((valid) => {
                if (valid) {
                    this.signIn(this.form);
                }
            });
        },
    },
};
</script>

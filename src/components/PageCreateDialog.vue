<template>
    <el-dialog title="Создание раздела"
               :visible.sync="visible">
        <el-form :model="form"
                 label-position="left"
                 label-width="150px"
                 ref="form"
                 :rules="rules">
            <el-form-item label="Название раздела" prop="title">
                <el-input v-model="form.title" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="createPage()">Создать</el-button>
    <el-button @click="close()">Отмена</el-button>
  </span>
    </el-dialog>
</template>

<script>
export default {
    name: 'pageCreateDialog',
    props: {
        opened: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            formName: 'form',
            form: {
                title: '',
            },
            rules: {
                title: [
                    { required: true, message: 'Ввевидте название раздела', trigger: 'blur' },
                    { max: 100, message: 'Название раздела должно содержать не более 100 символов', trigger: 'blur' },
                ],
            },
            visible: false,
        };
    },
    watch: {
        opened(val) {
            this.visible = val;
        },
        visible(val) {
            if (!val) {
                this.close();
            }
        },
    },
    methods: {
        reset() {
            this.$refs[this.formName].resetFields();
        },
        close() {
            this.reset();
            this.$emit('update:opened', false);
            this.visible = false;
        },
        createPage() {
            this.$refs[this.formName].validate((valid) => {
                if (valid) {
                    this.$emit('save', this.form);
                    this.$notify({
                        title: 'Сохранено',
                        message: 'Раздел успешно создан',
                        type: 'success',
                    });
                    this.close();
                }
            });
        },
    },
};
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <el-form :model="taskForm"
                 label-position="left"
                 label-width="150px"
                 ref="taskForm"
                 :rules="taskRules">
            <el-collapse>
                <el-collapse-item name="1">
                    <template slot="title">
                        <h2>Основное</h2>
                    </template>
                    <el-form-item label="Название задания" prop="title">
                        <el-input v-model="taskForm.title"/>
                    </el-form-item>
                    <el-form-item label="Блок" prop="blockId">
                        <el-select v-model="taskForm.blockId"
                                   placeholder="Выберите блок">
                            <el-option v-for="block in blocks"
                                       :key="block.id"
                                       :label="block.title"
                                       :value="block.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Основной текст" prop="text">
                        <el-input type="textarea"
                                  :rows="4"
                                  v-model="taskForm.text"/>
                    </el-form-item>
                    <el-form-item label="Дополнительные вопросы"
                                  prop="additionalQuestion">
                        <el-input type="textarea"
                                  :rows="4"
                                  v-model="taskForm.additionalQuestion"/>
                    </el-form-item>
                    <el-form-item label="Комментарии" prop="comment">
                        <el-input type="textarea"
                                  :rows="4"
                                  v-model="taskForm.comment"/>
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <h2>Вопросы</h2>
                    </template>
                    <el-row type="flex"
                            align="top"
                            style="margin-left: 30px"
                            v-for="(question, qindex) in taskForm.questions"
                            :key="question.id">
                        <el-col :span="22">
                            <el-collapse>
                                <el-collapse-item>
                                    <template slot="title">
                                        <h2>{{ qindex + 1 }}:</h2>
                                    </template>
                                    <el-form-item label="Описание вопроса">
                                        <el-input type="textarea"
                                                  :rows="2"
                                                  v-model="question.description"/>
                                    </el-form-item>
                                    <h3>Видео:</h3>
                                    <el-form-item v-for="(video, vindex) in question.videos"
                                                  :key="vindex"
                                                  :label="'Ссылка на видео ' + (vindex + 1) ">
                                        <el-row type="flex">
                                            <el-col>
                                                <el-input v-model="video.url"/>
                                            </el-col>
                                            <el-col>
                                                <el-button type="danger"
                                                           icon="el-icon-delete"
                                                           circle
                                                           title="Удалить Видео"
                                                           style="margin-left: 20px"
                                                           @click="removeVideoHandler(question.videos, vindex)">
                                                </el-button>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                                    <el-button type="primary"
                                               icon="el-icon-plus"
                                               circle
                                               title="Добавить еще"
                                               @click="addVideoHandler(question.videos)"></el-button>
                                    <h3>Картинки:</h3>
                                    <el-upload
                                            action=""
                                            ref="upload"
                                            :multiple="true"
                                            :auto-upload="false"
                                            :file-list="question.images"
                                            :on-change="(file, fileList) => filesChangeHandler(file, fileList, question)"
                                            :on-remove="(file, fileList) => filesDeleteHandler(file, fileList, question)"
                                            list-type="text"
                                            style="margin-top: 20px">
                                        <el-button type="primary"
                                                   circle
                                                   title="Загрузить картинки"
                                                   icon="el-icon-upload"></el-button>
                                    </el-upload>
                                    <el-row type="flex"
                                            align="top"
                                            v-show="question.test.length"
                                            style="margin-top: 20px">
                                        <el-col :span="22">
                                            <el-collapse>
                                                <el-collapse-item>
                                                    <template slot="title">
                                                        <h3>Тест:</h3>
                                                    </template>
                                                    <el-form-item
                                                            label="Проверка теста по кнопке">
                                                        <el-checkbox v-model="question.checkTestByBtn"></el-checkbox>
                                                    </el-form-item>
                                                    <div v-for="(testItem, tindex) in question.test"
                                                         style="margin-left: 30px"
                                                         :key="testItem.id">
                                                        <el-row type="flex" align="top">
                                                            <el-col :span="22">
                                                                <el-collapse>
                                                                    <el-collapse-item>
                                                                        <template slot="title">
                                                                            <h3>Вопрос: {{ tindex + 1 }}</h3>
                                                                        </template>
                                                                        <el-form-item
                                                                                label="Вопрос">
                                                                            <el-input type="textarea"
                                                                                      :rows="2"
                                                                                      v-model="testItem.question"/>
                                                                        </el-form-item>
                                                                        <h3>Ответы:</h3>
                                                                        <div v-for="(answer, aindex) in testItem.answers"
                                                                             :key="answer.id">
                                                                            <el-row type="flex" align="top">
                                                                                <el-col :span="22">
                                                                                    <el-form-item
                                                                                            :label="'Ответ ' + (aindex + 1)">
                                                                                        <el-input type="textarea"
                                                                                                  :rows="2"
                                                                                                  v-model="answer.answer"/>
                                                                                    </el-form-item>
                                                                                    <el-form-item
                                                                                            label="Правильный ответ">
                                                                                        <el-checkbox v-model="answer.isCorrect"></el-checkbox>
                                                                                    </el-form-item>
                                                                                </el-col>
                                                                                <el-col :span="2">
                                                                                    <el-button type="danger"
                                                                                               circle
                                                                                               title="Удалить ответ"
                                                                                               icon="el-icon-delete"
                                                                                               style="margin-left: 20px"
                                                                                               v-show="testItem.answers.length > 1"
                                                                                               @click="deleteAnswerHandler(testItem.answers, aindex)">
                                                                                    </el-button>
                                                                                </el-col>
                                                                            </el-row>
                                                                        </div>
                                                                        <el-button type="primary"
                                                                                   plain
                                                                                   title="Добавить ответ"
                                                                                   style="margin-top: 20px"
                                                                                   @click="addAnswerHandler(testItem.answers)">
                                                                            Добавить ответ
                                                                        </el-button>
                                                                    </el-collapse-item>
                                                                </el-collapse>
                                                            </el-col>
                                                            <el-col :span="2">
                                                                <el-button type="danger"
                                                                           circle
                                                                           title="Удалить вопрос"
                                                                           icon="el-icon-delete"
                                                                           style="margin-left: 20px"
                                                                           @click="deleteTestQuestionHandler(question.test, tindex)">
                                                                </el-button>
                                                            </el-col>
                                                        </el-row>
                                                    </div>
                                                    <el-button type="primary"
                                                               plain
                                                               title="Добавить вопрос в тест"
                                                               style="margin-top: 20px"
                                                               @click="addTestQuestionHandler(question.test)">
                                                        Добавить вопрос в тест
                                                    </el-button>
                                                </el-collapse-item>
                                            </el-collapse>
                                        </el-col>
                                        <el-col :span="2">
                                            <el-button type="danger"
                                                       circle
                                                       title="Удалить тест"
                                                       icon="el-icon-delete"
                                                       style="margin-left: 20px"
                                                       @click="deleteTestHandler(question)">
                                            </el-button>
                                        </el-col>
                                    </el-row>
                                    <el-button type="primary"
                                               plain
                                               title="Добавить тест"
                                               style="margin-top: 20px"
                                               v-show="!question.test.length"
                                               @click="addTestQuestionHandler(question.test)">
                                        Добавить тест
                                    </el-button>
                                </el-collapse-item>
                            </el-collapse>
                        </el-col>
                        <el-col :span="2">
                            <el-button type="danger"
                                       circle=""
                                       icon="el-icon-delete"
                                       title="Удалить вопрос"
                                       style="margin-top: 20px"
                                       v-show="taskForm.questions.length > 1"
                                       @click="deleteQuestionHandler(taskForm.questions, qindex)">
                            </el-button>
                        </el-col>
                    </el-row>
                    <el-button type="primary"
                               plain
                               title="Добавить вопрос"
                               style="margin-top: 20px"
                               @click="addQuestionHandler(taskForm.questions)">
                        Добавить вопрос
                    </el-button>
                </el-collapse-item>
            </el-collapse>
        </el-form>
        <el-row style="margin-top: 30px">
            <el-col>
                <el-button type="primary" @click="createEditHandler()">{{ button }}</el-button>
                <el-button @click="close()">Отмена</el-button>
            </el-col>
            <el-row type="flex" justify="end">
                <el-button v-show="isEdit"
                           type="danger"
                           @click="deleteHandler()">Удалить
                </el-button>
            </el-row>
        </el-row>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

const getCopy = obj => JSON.parse(JSON.stringify(obj));

const defaultVideo = {
    url: '',
};
const defaultAnswer = {
    answer: '',
    isCorrect: false,
};
const defaultTest = {
    question: '',
    answers: [getCopy(defaultAnswer)],
};

const defaultQuestion = {
    description: '',
    videos: [],
    images: [],
    test: [],
    checkTestByBtn: true,
};

export default {
    props: ['task', 'isEdit'],
    data() {
        return {
            loading: false,
            taskForm: this.task
                ? {
                    id: this.task.id,
                    title: this.task.title,
                    blockId: this.task.blockId,
                    text: this.task.text,
                    additionalQuestion: this.task.additionalQuestion,
                    comment: this.task.comment,
                    questions: this.task.questions,
                }
                : {
                    title: '',
                    blockId: null,
                    text: '',
                    additionalQuestion: '',
                    comment: '',
                    questions: [],
                },
            taskRules: {
                title: [
                    { required: true, message: 'Ввевидте название задания', trigger: 'blur' },
                    { max: 100, message: 'Название задания должно содержать не более 100 символов', trigger: 'blur' },
                ],
                blockId: [
                    { required: true, message: 'Выберите раздел', trigger: 'blur' },
                ],
                text: [],
                additionalQuestion: [],
                comment: [],
            },
            testRules: {
                question: [
                    { required: true, message: 'Ввевидте вопрос', trigger: 'blur' },
                ],
            },
            answerRules: {
                answer: [
                    { required: true, message: 'Ввевидте ответ', trigger: 'blur' },
                ],
            },
        };
    },
    computed: {
        ...mapState('blocks', [
            'blocks',
        ]),
        title() {
            return this.isEdit ? 'Редактирование задания' : 'Создание задания';
        },
        button() {
            return this.isEdit ? 'Сохранить' : 'Создать';
        },
    },
    methods: {
        ...mapActions('tasks', [
            'createTask',
            'editTask',
            'deleteTask',
        ]),
        deleteTestHandler(question) {
            this.$msgbox({
                title: 'Удаление теста',
                message: 'Вы уверены что хотите удалить тест целиком????',
                showCancelButton: true,
                confirmButtonText: 'Да',
                cancelButtonText: 'Нет',
            })
                .then(() => {
                    question.test = [];
                });
        },
        addTestQuestionHandler(test) {
            test.push(getCopy(defaultTest));
        },
        deleteTestQuestionHandler(test, index) {
            this.$msgbox({
                title: 'Удаление вопроса',
                message: 'Вы уверены что хотите удалить вопрос из теста?',
                showCancelButton: true,
                confirmButtonText: 'Да',
                cancelButtonText: 'Нет',
            })
                .then(() => {
                    test.splice(index, 1);
                });
        },
        addAnswerHandler(answers) {
            answers.push(getCopy(defaultAnswer));
        },
        deleteAnswerHandler(answers, index) {
            this.$msgbox({
                title: 'Удаление вопроса',
                message: 'Вы уверены что хотите удалить ответ на вопрос из теста?',
                showCancelButton: true,
                confirmButtonText: 'Да',
                cancelButtonText: 'Нет',
            })
                .then(() => {
                    answers.splice(index, 1);
                });
        },
        filesChangeHandler(file, fileList, question) {
            const reader = new FileReader();
            reader.onload = () => {
                question.images.push({
                    name: file.raw.name,
                    type: file.raw.type,
                    size: file.raw.size,
                    uid: file.raw.uid,
                    data: reader.result,
                });
            };
            reader.readAsDataURL(file.raw);
        },
        filesDeleteHandler(file, fileList, question) {
            question.images = question.images.filter(item => item.uid !== file.uid);
        },
        addVideoHandler(videos) {
            videos.push(getCopy(defaultVideo));
        },
        addQuestionHandler(questions) {
            questions.push(getCopy(defaultQuestion));
        },
        removeVideoHandler(videos, index) {
            videos.splice(index, 1);
        },
        deleteQuestionHandler(questions, index) {
            this.$msgbox({
                title: 'Удаление вопроса',
                message: 'Вы уверены что хотите удалить вопрос?',
                showCancelButton: true,
                confirmButtonText: 'Да',
                cancelButtonText: 'Нет',
            })
                .then(() => {
                    questions.splice(index, 1);
                });
        },
        reset() {
            this.$refs.taskForm.resetFields();
        },
        close() {
            this.reset();
            this.$router.push('/tasks');
        },
        createEditHandler() {
            this.$refs.taskForm.validate((valid) => {
                if (valid) {
                    const timeout = setTimeout(() => {
                        this.loading = true;
                    }, 300);
                    (this.isEdit
                        ? this.editTask(this.taskForm)
                        : this.createTask(this.taskForm)
                    )
                        .then(() => {
                            this.$notify({
                                title: 'Success',
                                type: 'success',
                                message: `Задание успешно ${this.isEdit ? 'сохранено' : 'создано'}`,
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
                title: 'Удаление заданиея',
                message: `Вы уверены что хотите удалить задание "${this.task.title}"?`,
                showCancelButton: true,
                confirmButtonText: 'Да',
                cancelButtonText: 'Нет',
            })
                .then(() => {
                    this.deleteTask(this.task)
                        .then(() => {
                            this.$notify({
                                title: 'Success',
                                type: 'success',
                                message: `Задание "${this.task.title}" успешно удалено`,
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

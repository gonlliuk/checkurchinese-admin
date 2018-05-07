import Vue from 'vue';
import Router from 'vue-router';
import Page from './views/Page.vue';
import Block from './views/Block.vue';
import Task from './views/Task.vue';
import Test from './views/Test.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            pathMatch: 'full',
            redirect: '/pages',
        },
        {
            path: '/pages',
            name: 'pages',
            component: Page,
        },
        {
            path: '/blocks',
            name: 'blocks',
            component: Block,
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Task,
        },
        {
            path: '/tests',
            name: 'tests',
            component: Test,
        },
    ],
});

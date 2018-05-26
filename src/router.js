import Vue from 'vue';
import Router from 'vue-router';
import Tabs from './views/Tabs.vue';
import Pages from './views/Pages.vue';
import Blocks from './views/Blocks.vue';
import Tasks from './views/Tasks.vue';
import Home from './views/Home.vue';
import CreateEditPageView from './views/CreateEditPageView.vue';
import CreateEditBlockView from './views/CreateEditBlockView.vue';
import CreateEditTaskView from './views/CreateEditTaskView.vue';
import CreateEditHomeView from './views/CreateEditHomeView.vue';

Vue.use(Router);

export default {
    app: new Router({
        mode: 'history',
        routes: [
            {
                path: '/home',
                component: Tabs,
                children: [
                    {
                        path: '/',
                        name: 'home',
                        component: Home,
                    },
                    {
                        path: 'create',
                        name: 'createHome',
                        component: CreateEditHomeView,
                        props: {
                            isEdit: false,
                        },
                    },
                    {
                        path: 'edit',
                        name: 'editHome',
                        component: CreateEditHomeView,
                        props: {
                            isEdit: true,
                        },
                    },
                    {
                        path: '*',
                        redirect: '/home',
                    },
                ],
            },
            {
                path: '/pages',
                component: Tabs,
                children: [
                    {
                        path: '/',
                        name: 'pages',
                        component: Pages,
                    },
                    {
                        path: 'create',
                        name: 'createPage',
                        component: CreateEditPageView,
                        props: {
                            isEdit: false,
                        },
                    },
                    {
                        path: 'edit',
                        name: 'editPage',
                        component: CreateEditPageView,
                        props: {
                            isEdit: true,
                        },
                    },
                    {
                        path: '*',
                        redirect: '/pages',
                    },
                ],
            },
            {
                path: '/blocks',
                component: Tabs,
                children: [
                    {
                        path: '/',
                        name: 'blocks',
                        component: Blocks,
                    },
                    {
                        path: 'create',
                        name: 'createBlock',
                        component: CreateEditBlockView,
                        props: {
                            isEdit: false,
                        },
                    },
                    {
                        path: 'edit',
                        name: 'editBlock',
                        component: CreateEditBlockView,
                        props: {
                            isEdit: true,
                        },
                    },
                    {
                        path: '*',
                        redirect: '/blocks',
                    },
                ],
            },
            {
                path: '/tasks',
                component: Tabs,
                children: [
                    {
                        path: '/',
                        name: 'tasks',
                        component: Tasks,
                    },
                    {
                        path: 'create',
                        name: 'createTask',
                        component: CreateEditTaskView,
                        props: {
                            isEdit: false,
                        },
                    },
                    {
                        path: 'edit',
                        name: 'editTask',
                        component: CreateEditTaskView,
                        props: {
                            isEdit: true,
                        },
                    },
                    {
                        path: '*',
                        redirect: '/tasks',
                    },
                ],
            },
            {
                path: '*',
                redirect: '/home',
            },
        ],
    }),
    login: new Router({
        mode: 'history',
        routes: [{
            path: '*',
            redirect: '/login',
        }, {
            path: '/login',
            name: 'login',
        }],
    }),
};

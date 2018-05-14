<template>
    <el-container>
        <el-header>
            <el-row type="flex" justify="center">
                <h1>CheckUrChinese Admin Page</h1>
            </el-row>
        </el-header>
        <el-main style="max-width: 960px; min-width: 640px;">
            <el-tabs type="card" @tab-click="handleTabClick" :active-name="activeTab">
                <el-tab-pane v-for="tab in tabs"
                             :key="tab.id"
                             :disabled="isTabDisabled"
                             :name="tab.link"
                             :label="tab.label">
                </el-tab-pane>
            </el-tabs>
            <router-view/>
        </el-main>
    </el-container>
</template>
<script>
import { mapActions } from 'vuex';

const routeRegexp = /(?!^\/[\w\d]+)(\/[\w\d]+)/g;
export default {
    data() {
        return {
            tabs: [{
                label: 'Разделы',
                link: '/pages',
            }, {
                label: 'Блоки',
                link: '/blocks',
            }, {
                label: 'Задания',
                link: '/tasks',
            }],
        };
    },
    computed: {
        activeTab() {
            return this.$route.path.replace(routeRegexp, '');
        },
        isTabDisabled() {
            return !!this.$route.path.match(routeRegexp);
        },
    },
    methods: {
        ...mapActions('pages', [
            'getPages',
        ]),
        ...mapActions('blocks', [
            'getBlocks',
        ]),
        ...mapActions('tasks', [
            'getTasks',
        ]),
        handleTabClick(tab) {
            this.$router.push({ path: this.tabs[tab.index].link });
        },
    },
    created() {
        this.getPages();
        this.getBlocks();
        this.getTasks();
    },
};
</script>

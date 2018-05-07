<template>
    <el-container>
        <el-header>
            <el-row type="flex" justify="center">
                <h1>CheckUrChinese Admin Page</h1>
            </el-row>
        </el-header>
        <el-main>
            <el-tabs type="card" @tab-click="handleTabClick">
                <el-tab-pane v-for="tab in tabs"
                             :key="tab.id"
                             :label="tab.label">
                </el-tab-pane>
            </el-tabs>
            <router-view/>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            tabs: [{
                label: 'Pages',
                link: 'pages',
            }, {
                label: 'Blocks',
                link: 'blocks',
            }, {
                label: 'Tasks',
                link: 'tasks',
            }, {
                label: 'Tests',
                link: 'tests',
            }],
        };
    },
    methods: {
        handleTabClick(tab) {
            this.$router.push({ path: this.tabs[tab.index].link });
        },
    },
};
</script>

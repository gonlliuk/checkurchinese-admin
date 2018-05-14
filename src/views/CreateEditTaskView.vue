<template>
    <div>
        <CreateEditTaskComponent :task="isEdit ? selectedTask : null" :is-edit="isEdit"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CreateEditTaskComponent from '../components/CreateEditTaskComponent.vue';

export default {
    components: {
        CreateEditTaskComponent,
    },
    props: {
        isEdit: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters('tasks', [
            'selectedTask',
        ]),
    },
};
</script>

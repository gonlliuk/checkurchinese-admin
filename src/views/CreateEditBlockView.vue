<template>
    <div>
        <CreateEditBlockComponent :block="isEdit ? selectedBlock : null" :is-edit="isEdit"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CreateEditBlockComponent from '../components/CreateEditBlockComponent.vue';

export default {
    components: {
        CreateEditBlockComponent,
    },
    props: {
        isEdit: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters('blocks', [
            'selectedBlock',
        ]),
    },
};
</script>

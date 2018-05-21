<template>
    <div>
        <CreateEditPageComponent :page="isEdit ? selectedPage : null" :is-edit="isEdit"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CreateEditPageComponent from '../components/CreateEditPageComponent.vue';

export default {
    components: {
        CreateEditPageComponent,
    },
    props: {
        isEdit: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters('pages', [
            'selectedPage',
        ]),
    },
    mounted() {
        if (!this.selectedPage && this.isEdit) {
            this.$router.push('/pages');
        }
    },
};
</script>

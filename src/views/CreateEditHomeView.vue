<template>
    <div>
        <CreateEditHomeComponent :home="isEdit ? home : null" :is-edit="isEdit"/>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import CreateEditHomeComponent from '../components/CreateEditHomeComponent.vue';

    export default {
        components: {
            CreateEditHomeComponent,
        },
        props: {
            isEdit: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            ...mapState('home', [
                'home',
            ]),
        },
        mounted() {
            if (!this.home && this.isEdit) {
                this.$router.push('/home');
            }
        },
    };
</script>

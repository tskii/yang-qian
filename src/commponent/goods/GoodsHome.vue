<template>
    <div>
        <app-breadcumd></app-breadcumd>
        <app-list></app-list>
        
        <app-top></app-top>
        
    </div>
</template>

<script>
    import ListComponent from './frame/List.vue';

    import BreadcumdComponent from './frame/Breadcumd.vue';
    import TopComponent from './frame/Top.vue';

    export default {
        components: {
            appList: ListComponent,
            
            appBreadcumd: BreadcumdComponent,
            appTop: TopComponent,
        }
    };
</script>

<style scoped>

</style>
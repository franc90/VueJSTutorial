<template>
    <div class="row">
        <az-server-list></az-server-list>
        <az-server-details></az-server-details>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue'
    import ServerDetails from './ServerDetails.vue'

    export default {
        components: {
            'az-server-details': ServerDetails,
            'az-server-list': ServerList
        }
    }
</script>
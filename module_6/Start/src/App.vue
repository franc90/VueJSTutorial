<template>
    <div class="container">
        <az-header></az-header>
        <hr>
        <az-body></az-body>
        <hr>
        <az-footer></az-footer>
    </div>
</template>

<script>
    import AzBody from './components/Body.vue'
    import AzHeader from './components/Header.vue'
    import AzFooter from './components/Footer.vue'
    export default {
        components: {
            AzBody,
            AzHeader,
            AzFooter
        }
    }
</script>

<style>

</style>

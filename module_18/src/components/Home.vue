<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="page-header">
                <h2>Trade or View your Portfolio</h2>
            </div>
            <p>You may Save & Load your Data.<br>
                Click 'End Day' to begin a new day!</p>
            <hr>
            <h4 class="funds">Your Funds: {{ funds | formatNumber }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            funds(){
                return this.$store.state.funds
            }
        }
    }
</script>

<style scoped>
    .funds {
        font-weight: bold;
    }
</style>
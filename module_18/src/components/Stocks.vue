<template>
    <div>
        <div class="row">
            <div class="col-xs-6 offset-xs-1" v-for="stock in stocks">
                <app-stock :name="stock.name" :price="stock.price"></app-stock>
            </div>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
        computed: {
            stocks(){
                return this.$store.state.stocks
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>
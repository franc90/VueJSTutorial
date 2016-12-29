<template>
    <div>
        <div class="row">
            <div class="col-xs-6 offset-xs-1" v-for="stock in stocks">
                <app-portfolio-stock
                        :name="stock.name"
                        :price="stock.price"
                        :quantity="stock.quantity"
                ></app-portfolio-stock>
            </div>

        </div>

    </div>
</template>

<script>
    import PortfolioStock from './PortfolioStock.vue'

    export default {
        computed: {
            stocks(){
                 let s = this.$store.getters.myStocks
                console.log(s)
                return s
            }
        },
        components: {
            appPortfolioStock: PortfolioStock
        }
    }
</script>
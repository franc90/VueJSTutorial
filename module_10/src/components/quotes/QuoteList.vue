<template>
    <div class="row">
        <az-quote v-for="(quote, index) in quotes" :text="quote" :index="index"></az-quote>
    </div>
</template>

<script>
    import { eventBus } from '../../main'
    import Quote from './Quote.vue'

    export default {
        data: () => {
            return {
                quotes: []
            }
        },
        components: {
            azQuote: Quote
        },
        created() {
            eventBus.$on('addQuote', (quote) => {
                this.quotes.push(quote)
            })
            eventBus.$on('removeQuote', (index) => {
                this.quotes.splice(index, 1)
            })
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="container">
        <az-header></az-header>
        <az-add-quote></az-add-quote>
        <az-quote-list></az-quote-list>
        <az-footer></az-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import AddQuote from './components/AddQuote.vue'
    import QuoteList from './components/quotes/QuoteList.vue'
    import Footer from './components/Footer.vue'

    export default {
        components: {
            azHeader: Header,
            azAddQuote: AddQuote,
            azQuoteList: QuoteList,
            azFooter: Footer
        }
    }
</script>

<style>
</style>

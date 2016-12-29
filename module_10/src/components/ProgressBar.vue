<template>

    <div class="progress">
        <div class="progress-bar" role="progressbar" :aria-valuenow="quotes" :aria-valuemin="minQuotes" :aria-valuemax="maxQuotes" :style="'width: ' + width + '%;'">
            <span v-if="quotes > 0">{{quotes}} / {{maxQuotes}}</span>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        data: () => {
            return {
                quotes: 0,
                maxQuotes: 10.,
                minQuotes: 0
            }
        },
        computed: {
            width() {
                return 100 * this.quotes / this.maxQuotes;
            }
        },
        created() {
            eventBus.$on('addQuote', () => {
                if (this.quotes < this.maxQuotes) {
                    this.quotes++
                }
            })
            eventBus.$on('removeQuote', () => {
                if (this.quotes > this.minQuotes) {
                    this.quotes--
                }
            })
        }
    }
</script>

<style scoped>

</style>
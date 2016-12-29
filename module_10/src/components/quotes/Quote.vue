<template>
    <div class="col-sm-6 col-md-4 col-lg-3 panel panel-default quote" @click="remove">
        <div class="panel-body quote-body">
            <span>{{text}}</span>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../../main'

    export default {
        props: {
            text: String,
            index: Number
        },
        methods: {
            remove(){
                eventBus.$emit('removeQuote', this.index)
            }
        }
    }
</script>

<style scoped>
    .quote {
        cursor: pointer;
    }
    .quote:hover {
        background-color: #ffe2e2;
    }
</style>
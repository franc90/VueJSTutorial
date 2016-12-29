<template>
    <div class="row">
        <div class="input-group col-md-offset-2 col-md-8">
            <div class="row buffer">
                <div class="col-md-12">
                    <strong>Quote</strong>
                    <textarea class="form-control custom-control" rows="5" cols="120" id="quote" v-model="text"></textarea>
                </div>
            </div>
            <div class="row buffer">
                <button class="btn btn-primary col-md-offset-5 col-md-2" type="button" @click="addQuote">Add Quote</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        data: () => {
            return {
                text: ''
            }
        },
        methods: {
            addQuote() {
                if (this.text) {
                    eventBus.$emit('addQuote', this.text)
                    this.text = ''
                }
            }
        }
    }
</script>

<style scoped>
.buffer {
    margin: 15px;
}
</style>
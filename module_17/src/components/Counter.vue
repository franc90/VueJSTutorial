<template>
    <div>
        <button class="btn btn-primary" @click="inc({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="dec({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        methods: {
            ...mapActions({
                inc: 'asyncIncrement',
                dec: 'asyncDecrement'
            })
        }
    }
</script>
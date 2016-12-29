<template>
    <div>
        <button class="btn btn-primary" @click="inc(100)">Increment</button>
        <button class="btn btn-primary" @click="dec(50)">Decrement</button>
    </div>
</template>

<script>
//    import {mapMutations} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        methods: {
            ...mapActions({
                inc: 'increment',
                dec: 'decrement'
            })
        }
    }
</script>
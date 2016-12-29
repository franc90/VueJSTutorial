<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import * as types from '../store/types';
    import  {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                counter: types.DOUBLE_COUNTER
            })
        }
    }
</script>
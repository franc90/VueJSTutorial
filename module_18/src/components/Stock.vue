<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            {{name}} (Price: {{price}})
        </div>
        <div class="panel-body">
            <div class="input-group">
                <input
                        type="number"
                        min="0"
                        :max="max"
                        class="form-control"
                        v-model="val">
                <span class="input-group-btn">
                    <button
                            class="btn btn-success"
                            type="button"
                            @click="buy">
                        Buy
                    </button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'price'],
        data(){
            return {
                val: 0
            }
        },
        computed: {
            max(){
                let max = Math.floor(this.$store.state.funds / this.price);
                if (max < 0) {
                    return 0
                }
                return max
            }
        },
        methods: {
            buy(){
                this.$store.commit('buy', {
                    stockName: this.name,
                    quantity: this.val
                })
            }
        }
    }
</script>
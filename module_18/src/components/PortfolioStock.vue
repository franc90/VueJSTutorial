<template>
    <div class="panel panel-info">
        <div class="panel-heading">
            {{name}} (Price: {{price}} | Quantity: {{quantity}})
        </div>
        <div class="panel-body">
            <div class="input-group">
                <input type="number"
                       min="0"
                       :max="quantity"
                       class="form-control"
                       v-model="val">
                <span class="input-group-btn">
                    <button class="btn btn-danger" type="button" @click="sell">Sell</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'price', 'quantity'],
        data(){
            return {
                val: 0
            }
        },
        methods: {
            sell() {
                if (this.val > 0) {
                    this.$store.commit('sell', {
                        stockName: this.name,
                        quantity: this.val
                    })
                }
            }
        }
    }
</script>
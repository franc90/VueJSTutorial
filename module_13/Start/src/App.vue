<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ ex1 | reverse }}</p>
                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ ex2 | countLength }}</p>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ ex1Computed }}</p>
                <p>{{ ex2Computed }}</p>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ ex4Computed }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { ex4Mixin } from './ex4Mixin'

    export default {
        data(){
            return {
                ex1: 'Exercise 1)',
                ex2: 'Exercise 2'
            }
        },
        computed: {
            ex1Computed(){
                return this.ex1.split('').reverse().join('')
            },
            ex2Computed(){
                return this.ex2 + ' (' + this.ex2.length + ')'
            }
        },
        filters: {
            reverse(val){
                return val.split("").reverse().join("")
            }
        },
        mixins: [ex4Mixin]
    }
</script>

<style>
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div class="btn-group" role="group" aria-label="...">
                    <button type="button"
                            class="btn btn-default"
                            v-my-click="generateNumber"
                    >Click Me!</button>
                </div>
                <hr>
                <h3>Random number:</h3>
                <span>{{randomNumber}}</span>
            </div>
        </div>
        <hr>
        <div class="row">
                <div class="btn-group" role="group" aria-label="...">
                    <button type="button"
                            class="btn btn-primary"
                            v-custom-on:click="clicked"
                    >Click Me!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              randomNumber: 12
          }
        },
        directives: {
            customOn: {
                bind(el, binding) {
                    const type = binding.arg
                    el.addEventListener(type,  binding.value)
                }
            },
            myClick: {
                bind(el, binding, vnode){
                    el.onclick = binding.value
                }
            }
        },
        methods: {
            clicked(){
                alert('I was clicked')
            },
            generateNumber(){
                console.log('generate number')
                this.randomNumber = Math.random()
            }
        }
    }
</script>

<style scoped>
    .myDiv {
        background-color: lightblue;

    }
</style>

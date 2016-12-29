<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name</button>
    </div>
</template>

<script>
    import {eventBus} from '../main'

    export default {
        props: {
            name: {
                type: String,
                required: true
                // default: 'Alex'
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("")
            },
            resetName() {
                this.$emit('nameReset', 'Alex')
            }
        },
        created() {
            eventBus.$on('ageEdited', age => {
                this.userAge = age
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

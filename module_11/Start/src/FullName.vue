<template>
    <div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text"
                   class="form-control"
                   id="firstName"
                   v-model="value.firstName"
                   @input="firstNameChanged">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text"
                   class="form-control"
                   id="lastName"
                   v-model="value.lastName"
                   @input="lastNameChanged">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            firstNameChanged(event){
                let firstName = event.target.value;
                this._emit(firstName, this.value.lastName);
            },
            lastNameChanged(event){
                let lastName = event.target.value;
                this._emit(this.value.firstName, lastName);
            },
            _emit(firstName, lastName){
                this.$emit('input', {
                    firstName: firstName,
                    lastName: lastName
                })
            }
        }
    }
</script>


<style scoped>

</style>
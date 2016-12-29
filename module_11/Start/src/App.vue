<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="user.fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text"
                                class="form-control"
                                id="email"
                                v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                                class="form-control"
                                id="password"
                                v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label for="storeData">
                            <input type="checkbox"
                                   id="storeData"
                                   value="StoreData"
                                   v-model="storeData">Store data?
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <button
                                class="btn btn-primary"
                                @click.prevent="submitIt">Submit!
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{user.fullName.firstName + ' ' + user.fullName.lastName}}</p>
                        <p>Mail: {{user.email}}</p>
                        <p>Password: {{user.password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'
    export default {
        data(){
            return {
                user: {
                    fullName: {
                        firstName: '',
                        lastName: ''
                    },
                    email: '',
                    password: ''
                },
                storeData: false,
                submitted: false
            };
        },
        methods: {
            submitIt(){
                this.submitted = true
            }
        },
        components: {
            appFullName: FullName
        }
    };
</script>

<style>
</style>

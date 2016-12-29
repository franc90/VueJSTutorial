<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p>Id: {{currentServer.id}}</p>
        <p>Status: {{currentServer.status}}</p>
        <button @click="resetStatus">Reset Status</button>
    </div>

</template>

<script>
    import {eventBus} from '../../main'

    export default  {
        data: () => {
            return {
                currentServer: {
                    id: '',
                    status: ''
                }
            }
        },
        methods: {
            resetStatus(){
                this.currentServer.status = 'Normal'
                eventBus.$emit('resetStatus', this.currentServer.id)
            }
        },
        created(){
            eventBus.$on('showServer', server => {
                this.currentServer = server;
            })
        }
    }
</script>

<style>

</style>

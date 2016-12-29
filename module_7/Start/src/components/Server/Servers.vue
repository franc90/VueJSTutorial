<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers"
                :server="server">
            </app-server>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from '../../main'
    import Server from './Server.vue'

    export default {
        data: () => {
            return {
                servers: [
                    {id: 'a128vcx', status: 'Normal'},
                    {id: '8sdhje0', status: 'Critical'},
                    {id: '21dsa8w', status: 'Warn'},
                    {id: '6qpix63', status: 'Normal'}
                ]
            }
        },
        components: {
            appServer: Server
        },
        created(){
            eventBus.$on('resetStatus', serverId => {
                let server = this.servers.find(val => val.id == serverId);
                if (server) {
                    server.status = 'Normal'
                }
            })
        }
    }
</script>

<style>

</style>

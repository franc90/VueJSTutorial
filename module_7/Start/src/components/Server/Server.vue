<template>
    <li class="list-group-item"
        @click="showServer()">
        Server {{ server.id }}: {{ server.status }}
    </li>
</template>

<script>
    import {eventBus} from '../../main'

    export default {
        props: {
            server: Object
        },
        methods: {
            showServer() {
                eventBus.$emit('showServer', {
                    id: this.server.id,
                    status: this.server.status
                })
            }
        }
    }
</script>
import Vue from 'vue'
import App from './App.vue'

import {router} from './routes/routes'
import {store} from './store/store'
import {} from './filers'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

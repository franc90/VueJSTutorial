import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue';

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-max-tutorial.firebaseio.com/'
Vue.http.interceptors.push((req, next) => {
    console.log(req)
    if (req.method == 'POST') {
        req.method = 'PUT'
    }
    next(resp => {
        resp.json = () => {
            return {
                messages: resp.body
            }
        }

    })
})

new Vue({
    el: '#app',
    render: h => h(App)
})

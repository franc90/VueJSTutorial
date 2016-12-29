<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="componentName = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="componentName = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="componentName = 'appRed'">Load Red Template</button>
                <hr>

                <comment :is="componentName">
                    <p>
                        Mauris sit amet justo ac nisi congue rhoncus. Ut id sapien ac nisi scelerisque aliquet eu sed augue.
                        Proin ac sodales sem, ac malesuada libero. Mauris rhoncus nulla ut ante dapibus, eu egestas justo dictum.
                        Fusce at turpis sapien. Ut sollicitudin purus nec velit iaculis vulputate. Aliquam erat volutpat.
                    </p>
                </comment>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: () => {
          return {
              componentName: 'app-blue'
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>

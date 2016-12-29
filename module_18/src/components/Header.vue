<template>
    <div class="nav-container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link :to="{name:'home'}"
                                 tag="a"
                                 class="navbar-brand">
                        Stock Trader
                    </router-link>
                </div>


                <ul class="nav navbar-nav">
                    <li>
                        <router-link :to="{name:'portfolio'}"
                                     tag="a">
                            Portfolio
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'stocks'}"
                                     tag="a">
                            Stocks
                        </router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a class="endDay" @click="endDay">End Day</a>
                    </li>
                    <li class="dropdown">
                        <a href="#"
                           class="dropdown-toggle"
                           data-toggle="dropdown"
                           role="button"
                           aria-haspopup="true"
                           aria-expanded="false">
                            Save & Load <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">Save Data</a>
                            </li>
                            <li>
                                <a href="#">Load Data</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="navbar-text">Founds: {{funds | formatNumber}}</p>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        computed: {
            funds(){
                return this.$store.state.funds
            }
        },
        methods: {
            endDay(){
                this.$store.commit('endDay')
            }
        }
    }
</script>

<style scoped>
    .nav-container {
        padding-top: 20px;
    }

    .endDay {
        cursor: pointer;
    }
</style>
<template>
    <div id="app">
        <h1>Bitcoin Price Index</h1>
        <div
                v-for-key="currency in info"
                class="currency">
            {{ currency.description }}:
            <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
        </div>
    </div>
</template>

<script type="text/javascript" charset="utf-8">
    //import HelloWorld from './components/HelloWorld.vue'
    import axios from 'axios'
    export default {
       data(){
           return {
               info: null
           }
       },
        mounted () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response.data.bpi))
        },
        filters: {
            currencydecimal (value) {
                return value.toFixed(2)
            }
        }
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

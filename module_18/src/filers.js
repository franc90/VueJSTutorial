import Vue from 'vue'

Vue.filter('formatNumber', (val) => {
    return parseFloat(val).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
        useGrouping: true,
        maximumFractionDigits: 2
    })
})
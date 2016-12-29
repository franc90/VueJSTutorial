import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        portfolio: [],
        stocks: [{
            name: 'BMW',
            price: 110
        }, {
            name: 'Google',
            price: 200
        }, {
            name: 'Apple',
            price: 250
        }, {
            name: 'Twitter',
            price: 8
        }]
    },
    getters: {
        myStocks(state){
            let myStocks = []
            state.portfolio.forEach(pStock => {
                let stock = state.stocks.find(stock => {
                    return stock.name == pStock.name
                })

                myStocks.push({
                    name: stock.name,
                    price: stock.price,
                    quantity: pStock.quantity
                })
            })
            return myStocks
        }
    },
    mutations: {
        buy(state, payload){
            let stock = state.stocks.find(stock => {
                return stock.name == payload.stockName
            })

            let totalPrice = payload.quantity * stock.price
            if (totalPrice <= state.funds) {
                state.funds -= totalPrice
                let portfolioStock = state.portfolio.find(stock => {
                    return stock.name == payload.stockName
                })

                if (portfolioStock) {
                    portfolioStock.quantity += payload.quantity
                } else {
                    state.portfolio.push({
                        name: stock.name,
                        quantity: payload.quantity
                    })
                }
            } else {
                alert('Not enough money, Coral!')
            }
        },
        sell(state, payload){
            let stock = state.stocks.find(stock => {
                return stock.name == payload.stockName
            })

            let portfolioStock = state.portfolio.find(stock => {
                return stock.name == payload.stockName
            })

            if (portfolioStock && portfolioStock.quantity >= payload.quantity) {
                state.funds += payload.quantity * stock.price
                portfolioStock.quantity -= payload.quantity

                if (portfolioStock.quantity == 0) {
                    let stc = state.portfolio.findIndex(el => el.name == portfolioStock.stockName)
                    state.portfolio.splice(stc, 1)
                }
            } else {
                alert('Cannot sell, Coral, too little stocks!')
            }
        },
        endDay(state){
            state.stocks.forEach(stock => {
                let change = .9 + Math.random() * .2
                stock.price *= change
                stock.price = stock.price.toFixed(2)
            })
        }
    }
})
import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
    state: {
        products: [],
        product: null,
    },
    getters: {},
    actions: {
        async getProducts({ commit }) {
            try {
                const data = await axios.get('https://fakestoreapi.com/products')
                commit('SET_PRODUCTS', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async getProduct({ commit }, productId) {
            try {
                const data = await axios.get(`https://fakestoreapi.com/products/${productId}`)
                commit('SET_PRODUCT', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_PRODUCT(state, product) {
            state.product = product;
        },
    }
})
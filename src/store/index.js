import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
    state: {
        products: [],
        product: null,
        cart: []
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
        addProductToCart({ commit }, { product, quantity }) {
            commit('ADD_TO_CART', { product, quantity })
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_PRODUCT(state, product) {
            state.product = product;
        },
        ADD_TO_CART(state, { product, quantity }) {

            let productInCart = state.cart.find(item => {
                return item.product.id === product.id;
            });

            if (productInCart) {
                productInCart.quantity += quantity;
                return;
            }

            state.cart.push({
                product,
                quantity
            })
        }
    }
})
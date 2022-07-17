import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
    state: {
        products: [],
        product: null,
        cart: []
    },
    getters: {
        cartItemCount(state) {
            return state.cart.length;
        },
        cartTotalPrice(state) {
            let total = 0;
            state.cart.forEach(item => {
                total += item.product.price * item.quantity;
            })
            return total;
        }
    },
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
        },
        removeProduct({ commit }, product) {
            commit('REMOVE_PRODUCT', product);
        },
        clearCart({ commit }) {
            commit('CLEAR_CART');
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
        },
        REMOVE_PRODUCT(state, product) {
            state.cart = state.cart.filter(item => {
                return item.product.id !== product.id;
            })
        },
        CLEAR_CART(state) {
            state.cart = [];
        }
    }
})
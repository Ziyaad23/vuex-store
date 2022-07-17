<template>
  <div class="flex justify-center">
    <div class="relative">
      <button
        @click="show = !show"
        class="flex items-center p-2 text-white rounded-md font-bold"
      >
        <span class="mr-4">{{ cartItemCount }} in Cart</span>
        <svg
          class="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        v-show="show"
        class="absolute -right-20 md:right-0 py-2 mt-2 bg-white rounded-md shadow-xl w-72"
      >
        <div
          class="flex justify-between block px-4 py-2 text-sm text-black hover:bg-blue-500 hover:text-white"
          v-for="item in cart"
          :key="item.product.id"
        >
          <div class="w-40">
            <p>{{ item.product.title }}</p>
            <p class="font-semibold">
              {{ item.quantity }} x ${{ item.product.price }}
            </p>
          </div>
          <div>
            <a
              class="bg-gray-500 p-1 font-bold text-white"
              @click.prevent="removeProduct(item.product)"
              >remove</a
            >
          </div>
        </div>
        <div class="flex justify-between block px-4 py-2 text-sm text-black">
          <div>
            <p class="font-bold">Total: ${{ cartTotalPrice }}</p>
          </div>
          <div>
            <a
              href="#"
              class="font-bold text-blue-500"
              @click.prevent="clearCart()"
              >Clear Cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
    clearCart() {
      this.$store.dispatch("clearCart");
    },
  },
};
</script>

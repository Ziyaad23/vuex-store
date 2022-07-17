<template>
  <div class="container my-12 px-6 mx-auto" v-if="product">
    <section class="mb-32 text-gray-800">
      <div class="block rounded-lg shadow-lg bg-white">
        <div class="flex flex-wrap items-center">
          <div
            class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12"
          >
            <img
              :src="product.image"
              alt="Trendy Pants and Shoes"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="text-3xl font-bold mb-6">{{ product.title }}</h2>
              <p class="text-gray-500 mb-6">
                {{ product.description }}
              </p>
              <p class="font-bold mb-6">${{ product.price }}</p>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click="addToCart()"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],

  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

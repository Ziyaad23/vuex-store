<template>
  <div class="flex justify-center p-5">
    <div
      class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-2xl"
    >
      <img
        class="w-full h-96 md:h-[350px] object-scale-down md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        :src="product.image"
        alt="Product-Image"
      />
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">
            {{ product.title }}
          </h5>
          <p class="text-gray-700 text-base mb-4 p-description">
            {{ product.description }}
          </p>
          <p class="text-gray-600 text-xs">${{ product.price }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

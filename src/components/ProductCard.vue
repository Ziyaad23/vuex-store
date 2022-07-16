<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"
    >
      <img
        class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        :src="product.image"
        alt="Product-Image"
      />
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">
            {{ product.title }}
          </h5>
          <p class="text-gray-700 text-base mb-4">
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

<template>
  <div v-if="product">
    <div>{{ product.title }}</div>
    <div class="mb-4">
      <img :src="product.image" class="max-w-full h-auto rounded-lg" alt="" />
      <p></p>
    </div>
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
};
</script>

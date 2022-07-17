<template>
  <div class="flex justify-center">
    <div class="relative">
      <button
        @click="show = !show"
        class="flex items-center p-2 text-white rounded-md font-bold"
      >
        <span class="mr-4">Cart (0)</span>
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
        class="absolute right-0 py-2 mt-2 bg-white rounded-md shadow-xl w-60"
      >
        <router-link
          to="/"
          class="block px-4 py-2 text-sm text-black hover:bg-blue-500 hover:text-white"
        >
          <div class="flex justify-between">
            <div>
              <p>Product Title</p>
              <p>1 x $23</p>
            </div>
            <div><a href="#">Remove</a></div>
          </div>
        </router-link>
        <router-link
          to="/"
          class="block px-4 py-2 text-sm text-black hover:bg-blue-500 hover:text-white"
        >
          <div class="flex justify-between">
            <div>
              <p>Product Title</p>
              <p>1 x $23</p>
            </div>
            <div><a href="#">Remove</a></div>
          </div>
        </router-link>
        <router-link
          to="/"
          class="block px-4 py-2 text-sm text-black hover:bg-blue-500 hover:text-white"
        >
          <div class="flex justify-between">
            <div>
              <p>Product Title</p>
              <p>1 x $23</p>
            </div>
            <div><a href="#">Remove</a></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

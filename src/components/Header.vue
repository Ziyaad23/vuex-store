<template>
  <div class="bg-blue-500">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-gray-100 md:text-2xl uppercase"
          >Vuex Store
        </router-link>
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-white focus:outline-none focus:text-white"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-4 space-y-4 md:flex md:space-y-0 border-t border-white md:border-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <router-link to="/">
          <li class="text-gray-100 font-bold">Products</li>
        </router-link>
        <Cart />
      </ul>
    </nav>
  </div>
</template>

<script>
import Cart from "./Cart.vue";
export default {
  components: {
    Cart,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

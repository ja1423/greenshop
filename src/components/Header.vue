<script>
import Login from "./Login.vue";
import Slide from "./Slide.vue";
import { mapGetters } from "vuex";
export default {
  components: { Slide, Login },
  computed: {
    ...mapGetters(["cartCount"]),
  },
  data() {
    return {
      isModal: false,
      isMobileMenuOpen: false,
      cartCount: 0, 
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <nav class="flex justify-between items-center py-5 border-b fixed z-30 bg-white w-full">
      <img src="/icons/greenShopLogo.svg" alt="" />
      <ul class="hidden md:flex items-start gap-12">
        <li>
          <a
            href="#home"
            class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#shop"
            class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Shop</a
          >
        </li>
        <li>
          <a
            href="#plant-care"
            class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Plant Care</a
          >
        </li>
        <li>
          <a
            href="#blogs"
            class="border-b-4 pb-6 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Blogs</a
          >
        </li>
      </ul>
      <div class="flex items-center gap-8">
        <div class="hidden md:flex gap-5">
          <img src="/icons/search.svg" alt="" />
          <div class="relative">
            <img src="/icons/cart.svg" alt="" />
            <span
              class="absolute top-0 bg-[#46A358] text-white rounded-full px-1 left-4 text-[10px]"
              >{{ cartCount }}</span
            >
          </div>
        </div>
        <button
          @click="isModal = true"
          class="bg-[#46A358] text-white flex items-center px-4 py-1 gap-1 rounded-lg"
        >
          <img src="/icons/Logout.svg" alt="" />
          Login
        </button>
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden">
          <img src="/icons/menu.svg" alt="Menu" />
        </button>
      </div>
    </nav>
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-0 left-0 w-full bg-white shadow-lg z-20">
      <ul class="flex flex-col items-center py-5 gap-4">
        <li>
          <a
            href="#home"
            class="border-b-4 pb-2 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#shop"
            class="border-b-4 pb-2 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Shop</a
          >
        </li>
        <li>
          <a
            href="#plant-care"
            class="border-b-4 pb-2 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Plant Care</a
          >
        </li>
        <li>
          <a
            href="#blogs"
            class="border-b-4 pb-2 border-b-white focus:border-b-[#46A358] px-2 hover:border-b-[#46A358]"
            >Blogs</a
          >
        </li>
      </ul>
    </div>
    <Login v-if="isModal" @close="isModal = false" />
    <Slide />
  </div>
</template>










<script setup>
import { reactive } from "vue";

const products = reactive([
  {
    id: 1,
    title: "plant 1",
  },
  {
    id: 2,
    title: "plant 2",
  },
  {
    id: 3,
    title: "plant 3",
  },
  {
    id: 4,
    title: "plant 4",
  },
  {
    id: 5,
    title: "plant 5",
  },
]);
</script>
<template>
  <div class="container mt-8">
    <h1 class="text-3xl mb-5">Products</h1>

    <div class="flex gap-5">
      <router-link
        class="bg-slate-300 px-4 py-2 rounded-md"
        :to="{ name: 'product-details', params: { id: item.id    } }"
        v-for="item in products"
        :key="item.id"
        >{{ item.title }}</router-link
      >
    </div>
  </div>
</template>

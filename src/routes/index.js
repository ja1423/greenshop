import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../pages/Shop.vue"),
    },
    {
      path: "/shop/products",
      name: "shop-products",
      component: () => import("../pages/Shop-products.vue"),
    },
    {
      path: "/shop/products/:id",
      name: "shop-product",
      component: () => import("../pages/Shop-product.vue"),
    },
  ],
});

export default router;

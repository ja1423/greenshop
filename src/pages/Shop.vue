<script setup>
import Header from "../components/Header.vue";
import FooterAddress from "../components/FooterAddress.vue";
import Footer from "../components/Footer.vue";
import FooterUrl from "../components/FooterUrl.vue";
import Shop from "../components/Shop.vue";
import shop_flowers from "../components/shop_flowers.vue";
import Text from "../components/Text.vue";
</script>
<template>
  <div class="flex flex-wrap justify-center">
    <Header />
    <Shop />
    <shop_flowers />
    <Text />
    <FooterUrl />
    <FooterAddress />
    <Footer />
  </div>
</template>
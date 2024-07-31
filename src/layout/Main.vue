<template>
  <div>
    <!-- Header conent -->
    <div>
      <Marquee />
      <div class="container mx-auto">
        <Header />
      </div>
    </div>
    <!-- Main content -->
    <div class="bg-green-300">
      <div class="container mx-auto">
        <RouterView />
      </div>
    </div>
    <div>
      <div class="container mx-auto">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Marquee from "@/components/Marquee.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <!-- Header conent -->
    <div class="bg-red-400">
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
    <div class="bg-purple-400">
      <div class="container mx-auto">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="scss" scoped></style>

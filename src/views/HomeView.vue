<template>
  <div>
    <div class="flex justify-center">
      <img src="../assets//img/Hero.png" alt="hero image" width="100%" />
    </div>
    <AboutUsSection />
    <!-- <InvestmentFocus /> -->
    <Vision />
    <TestimonialDisplay />
  </div>
</template>

<script setup>
import InvestmentFocus from "@/components/InvestmentFocus.vue";
import Vision from "@/components/About/Vision.vue";
import TestimonialDisplay from "@/components/Home/Testimonials/TestimonialDisplay.vue";
import AboutUsSection from "@/components/Home/AboutUsSection.vue";
</script>

<style lang="scss" scoped></style>

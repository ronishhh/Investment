<template>
  <div class="my-20">
    <div class="flex justify-center">
      <blockquote class="quote h2 text-center border-bottom">
        What people say about us
      </blockquote>
    </div>
    <div class="flex flex-row">
      <swiper
        :slidesPerView="'auto'"
        :centeredSlides="true"
        :spaceBetween="30"
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="i in 5" :key="i">
          <TestimonialDetail />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { ref } from "vue";
import TestimonialDetail from "./TestimonialDetail.vue";

const modules = ref([Pagination]);
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 60%;
}
</style>

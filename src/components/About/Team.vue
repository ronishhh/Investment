<template>
  <div class="mt-20 px-[50px]">
    <div class="my-4 text-center">
      <h2 class="mission-title text-5xl">Our Team</h2>
      <p class="my-4">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="flex flex-col h-[700px]">
      <div
        class="upper bg-gray-100 h-full flex flex-col items-center justify-start pt-12"
      >
        <h3 class="text-5xl font-bold w-3/4 text-center tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, sed.
        </h3>
        <p class="font-medium text-lg w-2/3 text-center mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          laborum in sit sint exercitationem dignissimos voluptatem quis autem
          magni ab.
        </p>
      </div>
      <div class="lower border-t-2 w-full h-1/2 relative">
        <div class="absolute top-[-150px] px-20 h-[290px] w-full">
          <div class="w-full h-full flex justify-between">
            <swiper
              class="w-full h-full"
              :slides-per-view="4"
              :space-between="110"
              :pagination="{ clickable: true }"
            >
              <swiper-slide v-for="i in 8" :key="i">
                <div class="h-56 w-56 bg-gray-200 team">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt="team"
                    class="w-full h-full object-cover"
                  />
                </div>
                <span class="text-lg font-medium">John Doe</span><br />
                <span class="text-md font-medium">CEO & Founder</span>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
</script>
<style>
.team {
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
</style>

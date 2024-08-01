<template>
  <div class="flex flex-col justify-center items-center">
    <div class="my-4 text-center">
      <h2 class="investment-title border-b-4 pb-4 text-5xl">
        Investment Focus
      </h2>
      <p class="my-4">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="carousel carousel-center rounded-box w-2/3 space-x-4 p-4">
      <div class="carousel-item" v-for="item in carouselItems" :key="item">
        <div class="overlay-container">
          <img :src="item.imgLink" class="rounded-box" />
          <div class="overlay">
            <div class="absolute bottom-10 mx-4 text-white">
              <h3 class="md:text-base font-medium">{{ item.title }}</h3>
              <p class="md:text-2xl font-semibold">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const carouselItems = reactive([
  {
    title: "Ice cream",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  },
  {
    title: "Grapes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  },
  {
    title: "Orange",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  },
  {
    title: "Pineapple",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  },
  {
    title: "Cherry",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  },
  {
    title: "Mystery Fruit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  },
]);
</script>
<style scoped>
.carousel-item {
  position: relative;
}
.overlay-container {
  position: relative;
  overflow: hidden;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(55, 49, 49, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.overlay-container:hover .overlay {
  opacity: 1;
}
</style>

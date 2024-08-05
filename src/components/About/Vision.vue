<template>
  <div class="mt-20 px-[50px]">
    <div class="my-4 text-center">
      <h2 class="mission-title text-5xl">Our Vision</h2>
      <p class="my-4">Discover the vision behind our mission</p>
    </div>
    <div
      class="flex mt-8 justify-center items-center vision"
      v-for="item in visionDesc"
      :key="item.id"
    >
      <div class="basis-1/2 text-left flex flex-col gap-6">
        <div>
          <h3 class="text-green-400 text-xl font-bold">{{ item.id }}</h3>
        </div>
        <div>
          <h3 class="text-4xl font-bold">{{ item.title }}</h3>
        </div>
        <div>
          <p class="text-xl">
            {{ item.desc }}
          </p>
        </div>
      </div>
      <div class="rounded-xl basis-1/2 flex justify-end vision-img">
        <img
          :src="item.img"
          alt="ceo image"
          class="h-[400px] w-[600px] object-cover rounded-xl object-fit"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const visionDesc = reactive([
  {
    id: "01",
    title: "Vision 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis numquam veritatis inventore harum maxime voluptas explicabo cumque aspernatur deserunt consectetur?",
    img: "https://kvchtraininginstitute.news.blog/wp-content/uploads/2024/05/1530025506169.jpeg?w=624",
  },
  {
    id: "02",
    title: "Vision 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis numquam veritatis inventore harum maxime voluptas explicabo cumque aspernatur deserunt consectetur?",
    img: "https://i.pinimg.com/originals/97/8a/9a/978a9a2f2b63de5da46021351c5493e2.png",
  },
  {
    id: "03",
    title: "Vision 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis numquam veritatis inventore harum maxime voluptas explicabo cumque aspernatur deserunt consectetur?",
    img: "https://i.pinimg.com/564x/25/ce/a3/25cea33845dc649eebb8a29489d840ce.jpg",
  },
]);
</script>
<style scoped>
.card:nth-child(even) {
  margin-top: 150px;
}

.vision:nth-child(even),
.vision:nth-child(even) .vision-img {
  flex-direction: row-reverse;
  justify-content: start;
}
</style>

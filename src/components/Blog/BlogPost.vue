<template>
  <div class="blog-post flex flex-col w-full">
    <router-link :to="`/blog/${item.name}`">
      <div class="rounded-xl w-100 h-72">
        <img
          :src="item.imgUrl"
          alt="blog1"
          width="100%"
          height="100%"
          class="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div class="text-pretty">
        <p class="h4 my-2 text-pretty">{{ item.name }}</p>
        <span class="text-pretty">{{ item.details }}</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style scoped>
</style>

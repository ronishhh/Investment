<template>
  <div class="p-3 bg-gray-100">
    <div class="marquee marquee--hover-pause">
      <ul class="marquee__content">
        <!-- <li>Join Us for Just NPR.999!</li>
        👌
        <li>
          <span class="font-medium">Your Path to Growth Starts Here</span>
        </li> -->
        <li v-for="i in 6" :key="i" class="flex justify-around gap-3">
          <span>Join Us for Just NPR.999!</span>
          <span class="font-medium">Your Path to Growth Starts Here</span>
          <span>👌</span>
        </li>
      </ul>

      <ul aria-hidden="true" class="marquee__content">
        <!-- <li>Join Us for Just NPR.999!</li>
        👌
        <li>
          <span class="font-medium">Your Path to Growth Starts Here</span>
        </li> -->
        <li v-for="i in 6" :key="i" class="flex justify-around gap-3">
          <span>Join Us for Just NPR.999!</span>
          <span class="font-medium">Your Path to Growth Starts Here</span>
          <span>👌</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
}

.marquee__content {
  animation: scroll 60s linear infinite;
}

.marquee--hover-pause:hover .marquee__content {
  animation-play-state: paused;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>

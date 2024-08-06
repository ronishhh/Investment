<template>
  <div class="blog m-2">
    <slot></slot>
  </div>
</template>
<style scoped>
.blog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
}
</style>

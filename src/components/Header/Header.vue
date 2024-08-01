<template>
  <div class="flex justify-between h-[75px]">
    <div class="flex items-center">
      <img :src="brandLogo" alt="brandLogo" height="150" width="150" />
    </div>

    <Navbar />

    <div class="flex items-center">
      <button class="btn btn-ghost">
        <span class="text-sm font-semibold">Login</span>
      </button>
      <button class="btn btn-ghost">
        <span class="text-sm font-semibold">Sign Up</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import Navbar from "../Header/Navbar.vue";
import { brandLogo } from "../../../utils/index.ts";
</script>

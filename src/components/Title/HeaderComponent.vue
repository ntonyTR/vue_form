<template>
  <div class="background-container">
    <header class="flex justify-center items-center p-4 gap-x-5 bg-black/40">
      <img :src="logo" alt="Logo" class="h-24" />
      <h1 class="text-rose-600 font-mono font-light text-8xl tracking-wide">
        {{ title }}
      </h1>
    </header>
  </div>
</template>

<script>
import logo from "@/assets/img/logo.svg";
export default {
  name: "BackgroundContainer",
  data() {
    return {
      title: "NTNY",
      logo: logo,
    };
  },
};
</script>

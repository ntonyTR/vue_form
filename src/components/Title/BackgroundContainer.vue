<template>
  <div class="flex flex-col bg-spaceBackground bg-cover h-72 md:h-screen">
    <header-component class="mt-auto"></header-component>

    <footer-component class="self-center mt-auto mb-4"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
  name: "BackgroundContainer",
  data() {
    return {
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

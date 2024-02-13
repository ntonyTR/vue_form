<template>
  <div class="background-container">
    <footer>
      <h3 class="text-white text-xs md:text-xl font-medium">
        Photo by
        <a href="https://unsplash.com/@raddfilms" class="text-rose-600 font-bold">
          {{ photoCredit }}
        </a>
      </h3>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BackgroundContainer",
  data() {
    return {
      photoCredit: "Redd F.",
    };
  },
};
</script>

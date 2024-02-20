<template>
  <div>
    <p
      v-html="message"
      class="text-white text-lg px-4 md:text-3xl md:px-20 pt-10"
    ></p>
  </div>
</template>

<script>
export default {
  name: "WelcomeMessage",
  data() {
    return {
      message: `
        This is not a real online service! You know you need something like this in your life to help you realize your
        deepest dreams.
        <br />
        <br />
        <b>Sign up now to get started.</b>
        <br />
        You <em>know</em> you want to.
      `,
    };
  },
};
</script>

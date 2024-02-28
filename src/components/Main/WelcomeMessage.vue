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
        Welcome to our online platform! We're here to turn your wildest aspirations into concrete achievements.
        <br />
        <br />
        Join our digital community and embark on a journey of growth and fulfillment.
        <b>
          <br />
          <br />
          Sign up <em>now</em> to get started.</b>
      `,
    };
  },
};
</script>

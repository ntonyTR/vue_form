<template>
  <div class="bg-zinc-800 w-3/5">
    <WelcomeMessage />
    <sign-in-form />
  </div>
</template>

<script>
import WelcomeMessage from "./WelcomeMessage.vue";
import SignInForm from "./SignInForm.vue";

export default {
  name: "MainContent",
  components: {
    WelcomeMessage,
    SignInForm,
  },
  data() {
    return {};
  },
};
</script>

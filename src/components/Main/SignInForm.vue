<template>
  <div class="mt-8 bg-zinc-700 px-20 py-5 text-white">
    <h3 class="font-mono text-4xl">Sign Up</h3>
    <form
      action="https://httpbin.org/post"
      method="post"
      id="sign-up-form"
      class="grid grid-cols-1 gap-1 md:gap-x-10 md:grid-cols-2"
    >
      <form-field
        labelFor="first-name"
        labelText="FIRST NAME"
        inputType="text"
        inputId="first-name"
        inputName="first-name"
        inputPlaceholder="John"
        inputPattern="[a-zA-Z]+"
      />
      <form-field
        labelFor="last-name"
        labelText="LAST NAME"
        inputType="text"
        inputId="last-name"
        inputName="last-name"
        inputPlaceholder="Doe"
        inputPattern="[A-Za-z]+([- ][A-Za-z]+)?"
      />
      <form-field
        labelFor="email"
        labelText="EMAIL"
        inputType="email"
        inputId="email"
        inputName="email"
        inputPlaceholder="john@example.com"
        inputPattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
      />
      <form-field
        labelFor="phone"
        labelText="PHONE"
        inputType="tel"
        inputId="phone"
        inputName="phone"
        inputPlaceholder="81-1234-5678"
        inputPattern="[0-9]{10}"
        inputMaxLength="10"
      />
      <form-field
        labelFor="password"
        labelText="PASSWORD"
        inputType="password"
        inputId="password"
        inputName="password"
        inputPlaceholder=""
        inputPattern="[a-zA-Z0-9]{8}"
        inputMaxLength="8"
      />
      <form-field
        labelFor="password-confirmation"
        labelText="CONFIRM PASSWORD"
        inputType="password"
        inputId="password-confirmation"
        inputName="password-confirmation"
        inputPlaceholder=""
        inputPattern="[a-zA-Z0-9]{8}"
        inputMaxLength="8"
      />
    </form>

    <button
      class="bg-rose-600 text-white px-2 py-1 mt-2 rounded-md shadow-md hover:shadow-pink-600"
      type="submit"
      form="sign-up-form"
    >
      Create Account
    </button>
    <p>Already have an account? <a href="#">Log in</a></p>
  </div>
</template>

<script>
import formField from "./FormField.vue";

export default {
  name: "SignInForm",
  components: {
    formField,
  },
  data() {
    return {};
  },
};
</script>

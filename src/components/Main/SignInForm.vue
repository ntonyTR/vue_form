<template>
  <div class="mt-8 bg-zinc-700 px-20 py-5 text-white">
    <h3 class="font-mono text-4xl">Sign Up</h3>
    <form
      @submit.prevent="validateForm"
      novalidate="true"
      action="https://httpbin.org/post"
      method="post"
      id="sign-up-form"
      class="grid grid-cols-1 gap-1 md:gap-x-10 md:grid-cols-2"
    >
      <form-field
        :isValid="firstName.isValid"
        v-model="firstName.value"
        labelFor="first-name"
        labelText="FIRST NAME"
        inputType="text"
        inputId="first-name"
        inputName="first-name"
        inputPlaceholder="John"
      />
      <form-field
        :isValid="lastName.isValid"
        v-model="lastName.value"
        labelFor="last-name"
        labelText="LAST NAME"
        inputType="text"
        inputId="last-name"
        inputName="last-name"
        inputPlaceholder="Doe"
      />
      <form-field
        :isValid="email.isValid"
        v-model="email.value"
        labelFor="email"
        labelText="EMAIL"
        inputType="email"
        inputId="email"
        inputName="email"
        inputPlaceholder="john@example.com"
      />
      <form-field
        :isValid="phone.isValid"
        v-model="phone.value"
        labelFor="phone"
        labelText="PHONE"
        inputType="tel"
        inputId="phone"
        inputName="phone"
        inputPlaceholder="81-1234-5678"
        :inputMaxLength="10"
      />
      <form-field
        :isValid="password.isValid"
        v-model="password.value"
        labelFor="password"
        labelText="PASSWORD"
        inputType="password"
        inputId="password"
        inputName="password"
        :inputMaxLength="8"
        :passwordMatch="passwordMatch"
      />
      <form-field
        :isValid="passwordConfirmation.isValid"
        v-model="passwordConfirmation.value"
        labelFor="password-confirmation"
        labelText="CONFIRM PASSWORD"
        inputType="password"
        inputId="password-confirmation"
        inputName="password-confirmation"
        :inputMaxLength="8"
        :passwordMatch="passwordMatch"
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
    return {
      firstName: {
        value: "",
        isValid: true,
        inputPattern: /^[a-zA-Z]+$/,
      },
      lastName: {
        value: "",
        isValid: true,
        inputPattern: /^[a-zA-Z]+$/,
      },
      email: {
        value: "",
        isValid: true,
        inputPattern: /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/i,
      },
      phone: {
        value: "",
        isValid: true,
        inputPattern: /^[0-9]{10}$/i,
      },
      password: {
        value: "",
        isValid: true,
        inputPattern: /^[a-zA-Z0-9]{8}$/i,
      },
      passwordConfirmation: {
        value: "",
        isValid: true,
        inputPattern: /^[a-zA-Z0-9]{8}$/i,
      },
      passwordMatch: true,
    };
  },
  methods: {
    validateForm() {
      Object.keys(this.$data).forEach((key) => {
        if (typeof this[key] === "object" && this[key] !== null) {
          this[key].isValid = this.checkValidity(
            this[key].value,
            this[key].inputPattern
          );
        }
      });
      this.validatePasswords();
    },
    checkValidity(value, pattern) {
      if (value === "") {
        return false;
      }
      if (pattern) {
        const regex = new RegExp(pattern);
        return regex.test(value);
      }
      return true;
    },
    validatePasswords() {
      this.passwordMatch =
        this.password.value === this.passwordConfirmation.value;
    },
  },
};
</script>

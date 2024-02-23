<template>
  <div class="mt-8 bg-zinc-700 px-20 py-5 text-white">
    <h3 class="font-mono text-4xl">Sign Up</h3>
    <form
      @submit.prevent="submitForm"
      @input="validateField"
      novalidate
      action="https://httpbin.org/post"
      method="post"
      id="sign-up-form"
      class="grid grid-cols-1 gap-1 md:gap-x-10 md:grid-cols-2"
    >
      <form-field
        :isValid="firstName.isValid"
        v-model="firstName.value"
        :inputPattern="firstName.inputPattern"
        :touch="firstName.touched"
        labelFor="first-name"
        labelText="FIRST NAME"
        inputType="text"
        inputId="firstName"
        inputName="first-name"
        inputPlaceholder="John"
      />
      <form-field
        :isValid="lastName.isValid"
        v-model="lastName.value"
        :inputPattern="lastName.inputPattern"
        labelFor="last-name"
        labelText="LAST NAME"
        inputType="text"
        inputId="lastName"
        inputName="last-name"
        inputPlaceholder="Doe"
      />
      <form-field
        :isValid="email.isValid"
        v-model="email.value"
        :inputPattern="email.inputPattern"
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
        :inputPattern="phone.inputPattern"
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
        :inputPattern="password.inputPattern"
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
        :inputPattern="passwordConfirmation.inputPattern"
        labelFor="password-confirmation"
        labelText="CONFIRM PASSWORD"
        inputType="password"
        inputId="passwordConfirmation"
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
        isValid: false,
        touched: false,
        inputPattern: /^[a-zA-Z]+$/,
      },
      lastName: {
        value: "",
        isValid: false,
        inputPattern: /^[a-zA-Z]+$/,
      },
      email: {
        value: "",
        isValid: false,
        inputPattern: /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/i,
      },
      phone: {
        value: "",
        isValid: false,
        inputPattern: /^[0-9]{10}$/i,
      },
      password: {
        value: "",
        isValid: false,
        inputPattern: /^[a-zA-Z0-9]{8}$/i,
      },
      passwordConfirmation: {
        value: "",
        isValid: false,
        inputPattern: /^[a-zA-Z0-9]{8}$/i,
      },
      passwordMatch: true,
    };
  },
  methods: {
    validateField(event) {
      let element = this.$data[event.target.id];
      if (typeof element === "object" && element !== null) {
        element.isValid = this.checkValidity(
          element.value,
          element.inputPattern
        );
      }
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
    submitForm(){
      if(this.isFormValid()){
        document.getElementById('sign-up-form').submit();
      } else {
        alert('Please make sure all fields are valid.');
      }
    },
    isFormValid(){
      

      const fields = [
        this.firstName,
        this.lastName,
        this.email,
        this.phone,
        this.password,
        this.passwordConfirmation
      ];

      for (let field of fields) {
        if (!field.isValid) {
          return false;
        }
      }

      if(!this.passwordMatch){
        return false;
      }

      return true;
    }
  },
};
</script>

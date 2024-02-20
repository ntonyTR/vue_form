<template>
  <div class="flex flex-col mt-2">
    <label class="flex justify-between" :for="labelFor">
      {{ labelText }}
      <span
        v-if="!isValid || (isPassword && !passwordMatch)"
        :class="[
          !isValid ? 'invalid' : '',
          isPassword && !passwordMatch ? 'password-invalid' : '',
        ]"
      >
      </span>
    </label>
    <input
      :class="[
        'text-black',
        'p-2',
        'rounded-md',
        'focus:bg-gray-100',
        isValid ? 'border-none' : 'invalid',
        isPassword ? (passwordMatch ? 'border-none' : 'password-invalid') : '',
      ]"
      @input="$emit('input', $event.target.value)"
      required
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
      :maxlength="inputMaxLength"
    />
  </div>
</template>

<script>
export default {
  name: "FormField",
  props: {
    labelFor: String,
    labelText: String,
    inputType: String,
    inputId: String,
    inputName: String,
    inputPlaceholder: String,
    inputMaxLength: Number,
    isValid: Boolean,
    passwordMatch: Boolean,
  },
  computed: {
    isPassword() {
      return this.inputType === "password";
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
input.invalid {
  background-color: lightyellow;
}

span {
  font-size: 0.75rem;
  color: yellow;
}

span.invalid::before {
  content: "⚠️Field invalid⚠️";
}

span.password-invalid::before {
  content: "⚠️Passwords don't match⚠️ ";
}

input.password-invalid {
  background-color: lightcoral;
}
</style>

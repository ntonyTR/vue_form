<template>
  <div class="flex flex-col mt-2">
    <label class="flex justify-between" :for="labelFor">
      {{ labelText }}
      <span
        :class="[
          isValid ? 'valid' : '',
          !isValid && touched ? 'invalid' : '',
          isPassword && !passwordMatch && touched ? 'password-invalid' : '',
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
        (!isValid && touched) ? 'invalid' : 'border-none',
        (isPassword && touched) ? (passwordMatch ? 'border-none' : 'password-invalid') : '',
        isValid ? 'valid' : 'border-none', 

      ]"
      @input="$emit('input', $event.target.value)"
      @keyup="switchTouched"
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
  data() {
    return {
      touched: false,
    };
  },
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
    inputPattern: RegExp,
  },
  computed: {
    isPassword() {
      return this.inputType === "password";
    },
  },
  methods: {
    switchTouched() {
      this.touched = true;
    },
  },
};
</script>

<style scoped>
input.valid{
  background-color: lightgreen;
}

input.invalid {
  background-color: lightyellow;
}

input.password-invalid {
  background-color: lightcoral;
}

span {
  font-size: 0.75rem;
}

span.valid::before {
  content: "✅";
}

span.invalid::before {
  content: "⚠️Field invalid⚠️";
  color: yellow;
}

span.password-invalid::before {
  content: "❗Passwords don't match❗ ";
  color: lightcoral;
}
</style>

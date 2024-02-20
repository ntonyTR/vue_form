<template>
  <div class="flex flex-col">
    <label :for="labelFor">
      {{ labelText }}
    </label>
    <input
      :class="[
        'text-black',
        'p-2',
        'rounded-md',
        'focus:bg-gray-100',
        'border-2',
        passwordMatch ? 'border-none' : 'password-invalid',
      ]"
      @input="$emit('input', $event.target.value)"
      required
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
      :maxlength="inputMaxLength"
    />
    <span v-if="isValid === false" :class="isValid === false ? 'invalid' : ''">
    </span>
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
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
input.valid {
  border: 2px solid greenyellow;
}

input.invalid {
  border: 2px solid red;
  background-color: lightyellow;
}

.invalid::before {
  content: "⚠️ Field invalid!";
  color: red;
  font-size: 0.8rem;
}

input.password-invalid {
  border: 2px solid yellow;
}
</style>

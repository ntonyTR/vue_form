<template>
  <div class="flex flex-col mt-2">
    <label class="flex justify-between" :for="labelFor">
      {{ labelText }}
      <span
        v-if="touched"
        :class="[
          'text-xs',
          isValid ? 'text-valid' : '',
          !isValid && touched ?  'text-invalid' : '',
          isPassword && !passwordMatch && touched ? 'text-error' : '',
        ]"
      >
      {{ changeMessage() }}
      </span>
    </label>
    <input
      :class="[
        'text-black',
        'p-2',
        'rounded-md',,
        (!isValid && touched) ? 'bg-invalid' : '',
        (isPassword && touched) ? (passwordMatch ? '' : 'bg-error') : '',
        isValid ? 'bg-valid' : '', 

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
    changeMessage(){
      if(this.isPassword && !this.passwordMatch ){
        return "❗ Passwords don't match."
      } else if(!this.isValid){
        return "⚠️ Invalid value. Try again.";
      } else {
        return "✅ Correct. ";
      }
    }
  },
};
</script>
<template>
  <div class="flex flex-col">
    <label 
      :for="labelFor">

      {{ labelText }} 
    </label>
    <input
      class="text-black p-2 rounded-md :focus:bg-gray-100"
      required
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
      :pattern="inputPattern"
      :maxlength="inputMaxLength"
    />
    <span class="text-xs">AQUI VA UN ERROR</span>
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
    inputPattern: String,
    inputMaxLength: Number,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

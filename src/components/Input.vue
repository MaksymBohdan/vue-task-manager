<template>
  <div class="form-item">
    <label :for="name">{{ label }}:</label>
    <input
      type="text"
      autocomplete="off"
      :placeholder="placeholder"
      :name="name"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('on-validate', 'title')"
    />

    <p v-if="errors" class="error-message">not valid</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['label', 'placeholder', 'name', 'value', 'errors'],
};
</script>

<style scoped></style>

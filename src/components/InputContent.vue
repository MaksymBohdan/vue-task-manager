<!-- v-model="description"
    @blur="onValidate('description')"
-->

<template>
  <div class="form-item">
    <label for="name">{{ label }}:</label>
    <input
      type="text"
      :placeholder="placeholder"
      name="name"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('on-validate', 'description')"
      maxlength="2048"
      autocomplete="off"
    />
    <p v-if="errors" class="error-message">not valid</p>
    <p class="meta-info">{{ description.length }}/2048</p>
  </div>
</template>

<script>
export default {
  name: 'InputContent',
  props: ['label', 'placeholder', 'name', 'value', 'errors', 'description'],
};
</script>

<style></style>

<template>
  <div class="form-item">
    <label :for="name">{{ label }}:</label>
    <input
      type="date"
      autocomplete="off"
      :name="name"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputDate',
  props: ['label', 'name', 'value'],
};
</script>

<style></style>

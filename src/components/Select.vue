<template>
  <select class="select" @change="$emit('on-change', $event.target.value)">
    <option :value="option" :key="option" v-for="option in options">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: ['options', 'value'],
};
</script>

<style scoped>
.select {
  width: 200px;
  display: block;
  margin: 0 auto;
  padding: 5px;
  margin-top: 10px;
}
</style>

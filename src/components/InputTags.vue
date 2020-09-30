<template>
  <div class="form-item">
    <label for="name">{{ label }}:</label>
    <input
      type="text"
      :placeholder="placeholder"
      :name="name"
      v-bind:value="value"
      autocomplete="off"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('on-validate', 'tagsArr')"
      @keyup="$emit('on-tag-save', $event)"
    />

    <p class="no-tags" v-if="!tagsArr.length">No tags</p>

    <ul class="tag-list" v-else-if="tagsArr.length">
      <li class="tag-item" v-for="tag in tagsArr" :key="tag">
        {{ tag }}
      </li>
    </ul>

    <p v-if="errors" class="error-message">not valid</p>
  </div>
</template>

<script>
export default {
  name: 'InputTags',
  props: ['label', 'placeholder', 'name', 'tagsArr', 'value', 'errors'],
};
</script>

<style scoped>
.tag-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 424px;
  box-sizing: border-box;
  margin-top: 5px;
}

.tag-item {
  color: white;
  background-color: saddlebrown;
  padding: 5px;
  margin: 0px 5px 5px 0;
}
</style>

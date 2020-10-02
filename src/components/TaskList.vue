<template>
  <ul class="task-list">
    <li class="task-item" :key="i.id" v-for="i of list">
      <h3 class="title-style">
        {{ i.title }}
        {{ !i.status ? '&#9989;' : '&#9940;' }}
      </h3>
      <p class="cut-text">{{ i.description }}</p>
      <ul class="tag-list">
        <li class="tag-item" v-for="tag of i.tags" :key="tag.id">
          {{ tag.content }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TaskList',
  props: ['list'],
};
</script>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 10px;
}

.task-item {
  width: 400px;
  border: 1px solid black;
  text-align: center;
  margin-bottom: 10px;
  padding: 15px;
}

.tag-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

.title-style {
  display: flex;
  justify-content: center;
}

.cut-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

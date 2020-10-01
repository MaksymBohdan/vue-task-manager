<template>
  <div>
    <div>TaskList</div>

    <ul class="task-list">
      <li class="task-item" :key="task.id" v-for="task of allTasks">
        <h1>{{ task.title }}</h1>
        <p>{{ task.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TaskList',
  components: {},
  computed: mapGetters(['allTasks']),
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
  padding: 0;
}

.task-item {
  width: 400px;
  border: 1px solid black;
  text-align: center;
  margin-bottom: 10px;
}
</style>

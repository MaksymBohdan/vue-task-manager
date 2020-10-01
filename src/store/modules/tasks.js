export default {
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  },
  mutations: {
    createTask(state, newTask) {
      state.tasks.unshift(newTask);

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  actions: {},
  getters: {
    allTasks({ tasks }) {
      return tasks;
    },
  },
};

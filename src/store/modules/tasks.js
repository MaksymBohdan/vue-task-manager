export default {
  state: {
    tasks: [],
  },
  mutations: {
    createTask(state, newTask) {
      state.tasks.unshift(newTask);
    },
  },
  actions: {},
  getters: {
    allTasks({ tasks }) {
      return tasks;
    },
  },
};

export default {
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    filter: 'all',
  },
  mutations: {
    createTask(state, newTask) {
      state.tasks.unshift(newTask);

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    changeFilterValue(state, filterValue) {
      state.filter = filterValue;
    },
  },
  actions: {},
  getters: {
    allTasks({ tasks, filter }) {
      switch (filter) {
        case 'completed':
          return tasks.filter(({ status }) => !status);

        case 'not-completed':
          return tasks.filter(({ status }) => status);

        case 'outdated':
          return tasks.filter(({ date }) => date < Date.now());

        default:
          return tasks;
      }
    },

    filter({ filter }) {
      return filter;
    },
  },
};

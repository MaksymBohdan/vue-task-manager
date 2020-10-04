/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-parens */
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

    completeTask(state, id) {
      state.tasks = state.tasks.map(t =>
        t.id === id ? { ...t, status: false } : t,
      );

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, { id, ...fields }) {
      state.tasks = state.tasks.map(t =>
        t.id === id ? { ...t, ...fields } : t,
      );

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
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

    currentTask({ tasks }) {
      return id => tasks.find(task => task.id === id);
    },
  },
};

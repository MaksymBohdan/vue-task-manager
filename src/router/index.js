/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskList from '../views/TaskList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList,
  },
  {
    path: '/task-item/:id',
    name: 'TaskItem',
    component: () =>
      import(/* webpackChunkName: "task-item" */ '../views/TaskItem.vue'),
  },
  {
    path: '/new-task',
    name: 'NewTask',
    component: () =>
      import(/* webpackChunkName: "task-list" */ '../views/NewTask.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

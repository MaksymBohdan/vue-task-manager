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
  // {
  //   path: '/task-list',
  //   name: 'TaskList',
  //   component: () =>
  //     import(/* webpackChunkName: "task-list" */ '../views/TaskList.vue'),
  // },
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

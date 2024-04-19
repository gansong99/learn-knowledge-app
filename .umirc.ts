import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'AI 模拟练习',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '我的勋章',
      path: '/medal',
      component: './Medal',
    },
    {
      name: '我的收藏',
      path: '/collection',
      component: './Collection',
    },
    {
      name: '我的足迹',
      path: '/trace',
      component: './Trace',
    },
    {
      name: '我的上传',
      path: '/upload',
      component: './Upload',
    },
  ],
  npmClient: 'yarn',
});

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
      icon: 'HomeTwoTone',
    },
    {
      name: '我的勋章',
      path: '/medal',
      component: './Medal',
      icon: 'TrophyTwoTone',
    },
    {
      name: '我的收藏',
      path: '/collection',
      component: './Collection',
      icon: 'StarTwoTone',
    },
    {
      name: '我的足迹',
      path: '/trace',
      component: './Trace',
      icon: 'BuildTwoTone',
    },
    {
      name: '我的上传',
      path: '/upload',
      component: './Upload',
      icon: 'CloudTwoTone',
    },
  ],
  npmClient: 'yarn',
});

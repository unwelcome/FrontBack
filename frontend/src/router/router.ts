import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'MainPage',
      path: '/',
      component: () => import('@/pages/MainPage.vue'),
      meta: { requiresAuth: false },
    },
    {
      name: 'LoginPage',
      path: '/login',
      component: () => import('@/pages/LoginPage.vue'),
      meta: { requiresAuth: false },
    },
    {
      name: 'SignUpPage',
      path: '/signup',
      component: () => import('@/pages/SignUpPage.vue'),
      meta: { requiresAuth: false },
    },
    {
      name: 'FirstSemesterPage',
      path: '/first-semester',
      component: () => import('@/pages/FirstSemester.vue'),
      meta: { requiresAuth: false },
    },
    {
      name: 'SecondSemesterPage',
      path: '/second-semester',
      component: () => import('@/pages/SignUpPage.vue'),
      meta: { requiresAuth: false },
    },
    {
      name: 'ServicePage',
      path: '/service',
      component: () => import('@/pages/ServicePage.vue'),
      meta: { requiresAuth: false },
    },
  ],
});

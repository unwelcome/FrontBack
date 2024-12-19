import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'WelcomePage',
      path: '/',
      component: () => import('@/pages/WelcomePage.vue'),
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
  ],
});

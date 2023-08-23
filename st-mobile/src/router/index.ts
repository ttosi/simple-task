import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabsPage from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/todos',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/todos',
      },

      {
        path: 'todos',
        component: () => import('@/views/TodoView.vue'),
      },
      {
        path: 'groceries',
        component: () => import('@/views/GroceryView.vue'),
      },
      {
        path: 'goals',
        component: () => import('@/views/GoalsView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

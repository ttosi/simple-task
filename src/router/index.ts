import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabsPage from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/groceries',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/groceries',
      },
      {
        path: 'groceries',
        component: () => import('@/views/GroceryView.vue'),
      },
      {
        path: 'lists',
        component: () => import('@/views/ListsView.vue'),
      },
      {
        path: 'notes',
        component: () => import('@/views/NotesView.vue'),
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

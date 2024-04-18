import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from '@/views/login/Login.vue' // Assuming correct path
import RegisterPage from '@/views/login/Register.vue' // Assuming correct path
import HomePage from '@/views/home/HomePage.vue' // Assuming correct path
import BookingPage from '@/views/home/BookingPage.vue' // Assuming correct path

const routes = [
  { path: '/', component: LoginPage }, // Default redirect to home
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/register', name: 'register', component: RegisterPage },
  { path: '/home', name: 'home', component: HomePage },
  { path: '/home/booking', name: 'booking', component: BookingPage },
  {
    path: '/home/my-booking',
    name: 'my-booking',
    component: () => import('@/views/home/MyBooking.vue')
  },
  {
    path: '/home/list-pitch',
    name: 'list-pitch',
    component: () => import('@/views/home/ListPitch.vue')
  },
  {
    path: '/log-out',
    name: 'log-out',
    component: () => {
      window.location.href = window.location.origin + '/login'
    }
  },

  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

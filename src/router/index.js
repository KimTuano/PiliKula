import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import SignUp   from '../components/SignUp.vue'
import MainPage from '../components/MainPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',        component: HomePage },
    { path: '/signup',  component: SignUp   },
    { path: '/main',    component: MainPage },
  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import Zivotosprava from '../views/Zivotosprava.vue';
import Treningy from '../views/Treningy.vue';
import Kontakt from '../views/Kontakt.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomePage
    },
    {
      path: '/zivotosprava',
      name: 'Zivotosprava',
      component: Zivotosprava
    },
    {
      path: '/treningy',
      name: 'treningy',
      component: Treningy
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt
    }
  ]
})

export default router

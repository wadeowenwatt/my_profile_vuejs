import HomePage from '@/ui/home/HomePage.vue'
import PokeDetailPage from '@/ui/poke_detail/PokeDetailPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PokeDex',
      component: HomePage,
    },
    {
      path: '/pokemon/:id',
      name: 'PokemonDetails',
      component: PokeDetailPage,
    },
  ],
})

export default router

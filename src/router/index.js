import HomePage from '@/ui/home/HomePage.vue'
import NotFoundPage from '@/ui/not_found/NotFoundPage.vue'
import PokeDetailPage from '@/ui/poke_detail/PokeDetailPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'PokeDex',
      component: HomePage,
      // Uncomment for test nested routes
      // children: [
      //   {
      //     path: 'pokemon/:pokeName',
      //     name: 'PokemonDetails',
      //     component: PokeDetailPage,
      //   },
      // ],
    },
    {
      path: '/pokemon/:pokeName',
      name: 'PokemonDetails',
      component: PokeDetailPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundPage,
    },
  ],
})

export default router

import HomePage from '@/ui/home/HomePage.vue'
import NotFoundPage from '@/ui/not_found/NotFoundPage.vue'
import PokeDetailPage from '@/ui/poke_detail/PokeDetailPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // redirect: '/pokeDex'
      redirect: {
        name: 'PokeDex'
      },
    },
    {
      path: '/pokeDex',
      name: 'PokeDex',
      component: HomePage,
      // alias: ['/poke2', '/poke3']
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
      props: (route) => ({
        pokemonName: route.params.pokeName,
      })
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundPage,
    },
  ],
})

export default router

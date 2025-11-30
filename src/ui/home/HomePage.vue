<script setup>
import { PokeRepository } from '@/repository/poke_repository'
import { onMounted, ref } from 'vue'
import AppHeader from '../components/app/AppHeader.vue'
import AppFooter from '../components/app/AppFooter.vue'
import HeroCarousel from '../components/home/HeroCarousel.vue'
import FeaturedToday from '../components/home/FeaturedToday.vue'

const pokemons = ref([])

onMounted(async () => {
  try {
    pokemons.value = await PokeRepository.getListPokemon()
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <AppHeader />
  <HeroCarousel />
  <FeaturedToday />
  <div class="home-page">
    <div class="boxbb"></div>
  </div>
  <AppFooter />
</template>

<style scoped>
.boxbb {
  height: 100px;
  width: 100%;
}
</style>

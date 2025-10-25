<script setup>
import { PokeRepository } from '@/repository/poke_repository'
import { onMounted, ref } from 'vue'

const pokemons = ref([])

onMounted(async () => {
  pokemons.value = await PokeRepository.getListPokemon()
  console.log(pokemons.value[0].url)
})
</script>

<template>
  <img src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png" />
  <!-- Grid container for Pokémon images -->
  <div class="pokemon-grid">
    <!-- Display first 5 Pokémon -->
    <div v-for="(pokemon, index) in pokemons.slice(0, 5)" :key="index" class="pokemon-item">
      <img :src="pokemon.getImageUrl()" :alt="pokemon.name" class="pokemon-image" />
    </div>
  </div>
  <router-link :to="`/pokemon/hehe`">test</router-link>
</template>

<style scoped>
/* Grid layout for 5 items in one row */
.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin: 24px 0;
} /* Individual Pokémon card styling */
.pokemon-item {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
} /* Image styling */
.pokemon-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>

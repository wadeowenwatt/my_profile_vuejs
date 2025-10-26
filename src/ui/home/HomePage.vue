<script setup>
import { PokeRepository } from '@/repository/poke_repository'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const pokemons = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    pokemons.value = await PokeRepository.getListPokemon()
  } catch (error) {
    console.log(error)
  }
})

const goToPokemonDetail = (pokemonName) => {
  router.push({ name: 'PokemonDetails', params: { pokeName: pokemonName } })
}

const formatName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
</script>

<template>
  <div class="pokemon-logo-container">
    <img
      src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
      alt="Pokemon Logo"
      class="pokemon-logo"
    />
  </div>
  <!-- Un-comment for test nested routes -->
  <!-- <router-view></router-view> -->
  <div class="poke-container">
    <div
      class="pokemon"
      v-for="(pokemon, index) in pokemons"
      :key="index"
      @click="goToPokemonDetail(pokemon.name)"
    >
      <div class="img-container">
        <img loading="lazy" :src="`${pokemon.getImageUrl()}`" :alt="pokemon.name" />
      </div>
      <h2>{{ formatName(pokemon.name) }}</h2>
    </div>
  </div>
</template>

<style scoped>
.pokemon-logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.pokemon-logo {
  width: 15rem;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
}

.poke-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px;
}

.pokemon {
  height: 180px;
  width: 160px;
  margin: 8px;
  background-color: rgb(54, 54, 54);
  background: linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27));
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  margin: 10px;
  padding: 24px;
  text-align: center;
  color: #f1f1f1;
}

.pokemon .img-container {
  width: 136px;
  height: 136px;
  margin: 0 auto;
}

.pokemon .img-container img {
  margin-top: 16px;
  width: 85%;
  height: 85%;
}

.pokemon:hover {
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.4);
  cursor: pointer;
}
</style>

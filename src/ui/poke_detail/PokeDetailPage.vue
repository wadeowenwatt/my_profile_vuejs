<script setup>
import { PokeRepository } from '@/repository/poke_repository'
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// defineProps({
//   pokemonName: String,
// })

const route = useRoute()
let pokemonName = route.params.pokeName
const router = useRouter()

onMounted(() => {
  getDetailPokemon()
})

watch(
  () => route.params.pokeName,
  (newPokeName) => {
    pokemonName = newPokeName
    getDetailPokemon()
  },
)

const testNextPokemon = () => {
  router.push({ name: 'PokemonDetails', params: { pokeName: 'bulbasaur' } })
}

const getDetailPokemon = async () => {
  try {
    const pokemonDetail = await PokeRepository.getPokemonDetail(pokemonName)
    console.log(pokemonDetail)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <h1>Poke Detail Page</h1>
  <h2>{{ pokeName }}</h2>
  <button @click="testNextPokemon">Test next</button>
</template>

<style scoped></style>

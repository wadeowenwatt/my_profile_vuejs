<script setup>
import { PokeRepository } from '@/repository/poke_repository'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme_store'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

const pokemons = ref([])
const router = useRouter()

// theme store
const themeStore = useThemeStore()
const toggleTheme = () => themeStore.toggle()
const isDark = computed(() => themeStore.isDark)

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
  <AppHeader />
  <div class="home-page">
    <div class="boxbb"></div>
  </div>
  <AppFooter />
</template>

<style scoped>
.boxbb {
  height: 1000px;
  width: 100%;
  color: green;
}
</style>

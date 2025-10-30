<script setup>
import { PokeRepository } from '@/repository/poke_repository'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme_store'

const pokemons = ref([])
const router = useRouter()

// pagination
const limit = 20
const offset = ref(0)
const totalCount = ref(null)
const isLoading = ref(false)

// theme store
const themeStore = useThemeStore()
const toggleTheme = () => themeStore.toggle()
const isDark = computed(() => themeStore.isDark)

const loadPokemons = async () => {
  if (isLoading.value) return
  isLoading.value = true
  try {
    const res = await PokeRepository.getListPokemon(limit, offset.value)
    // repository now returns { items, count }
    const items = res.items || []
    const count = res.count ?? null
    if (offset.value === 0) {
      pokemons.value = items
    } else {
      pokemons.value = pokemons.value.concat(items)
    }
    offset.value += items.length
    if (count !== null) totalCount.value = count
  } catch (error) {
    console.error('Failed to load pokemons', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(loadPokemons)

const hasMore = computed(() => {
  if (totalCount.value === null) return true
  return pokemons.value.length < totalCount.value
})

const loadMore = async () => {
  if (!hasMore.value || isLoading.value) return
  await loadPokemons()
}

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
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :title="isDark ? 'Switch to light' : 'Switch to dark'"
  >
    {{ isDark ? '☀️' : '🌙' }}
  </button>
  <!-- Un-comment for test nested routes -->
  <router-view> </router-view>
  <div class="poke-container">
    <div
      class="pokemon"
      v-for="(pokemon, index) in pokemons"
      :key="pokemon.name || index"
      @click="goToPokemonDetail(pokemon.name)"
    >
      <div class="img-container">
        <img loading="lazy" :src="`${pokemon.getImageUrl()}`" :alt="pokemon.name" />
      </div>
      <h2>{{ formatName(pokemon.name) }}</h2>
    </div>
  </div>
  <div class="load-more-wrap">
    <button class="load-more" @click="loadMore" :disabled="!hasMore || isLoading">
      <span v-if="isLoading">Loading...</span>
      <span v-else-if="!hasMore">No more</span>
      <span v-else>Load more</span>
    </button>
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
  background-color: var(--card-bg);
  background: linear-gradient(to bottom, var(--card-grad-start), var(--card-grad-end));
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  margin: 10px;
  padding: 24px;
  text-align: center;
  color: var(--text-primary);
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
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.theme-toggle {
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 1200;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: var(--card-bg);
  color: var(--text-primary);
  box-shadow: var(--box-shadow);
  cursor: pointer;
}

.load-more-wrap {
  display: flex;
  justify-content: center;
  margin: 24px 0 48px;
}

.load-more {
  background: var(--card-bg);
  color: var(--text-primary);
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: var(--box-shadow);
}

.load-more[disabled] {
  opacity: 0.6;
  cursor: default;
}
</style>

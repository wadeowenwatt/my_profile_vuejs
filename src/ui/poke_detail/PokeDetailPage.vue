<script setup>
import { PokeRepository } from '@/repository/poke_repository'
import { onMounted, ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { colors } from '@/config/app_const'
import { useThemeStore } from '@/stores/theme_store'

const pokemonDetail = ref()
const isLoading = ref(false)

const route = useRoute()
let pokemonName = route.params.pokeName
const router = useRouter()

// theme store
const themeStore = useThemeStore()
const toggleTheme = () => themeStore.toggle()
const isDark = computed(() => themeStore.isDark)

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

const getDetailPokemon = async () => {
  isLoading.value = true
  try {
    pokemonDetail.value = await PokeRepository.getPokemonDetail(pokemonName)
    isLoading.value = false
    for (const key in pokemonDetail.value.stats) {
      formattedStats.value[labelMap[key]] = pokemonDetail.value.stats[key]
    }
  } catch (error) {
    console.log(error)
  }
}

// Chuyển đổi key từ camelCase → tên hiển thị
const labelMap = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  specialAttack: 'Sp. Attack',
  specialDefense: 'Sp. Defense',
  speed: 'Speed',
}

const formattedStats = ref({})

const getBarColor = (value) => {
  if (value < 50) return '#f77c7c' // đỏ nhạt
  if (value < 70) return '#f6c85f' // vàng
  return '#58d68d' // xanh lá
}

const testNextPokemon = () => {
  router.push({ name: 'PokemonDetails', params: { pokeName: 'bulbasaur' } })
}
</script>

<template>
  <div class="pokedex-page">
    <button
      class="theme-toggle"
      @click="toggleTheme"
      :title="isDark ? 'Switch to light' : 'Switch to dark'"
    >
      {{ isDark ? '☀️' : '🌙' }}
    </button>
    <div v-if="isLoading" class="container">
      <h1>Loading...</h1>
    </div>
    <div v-else class="container">
      <!-- Big image LEFT -->
      <div class="pokemon-card">
        <h2 class="pokemon-name" :style="{ color: colors[pokemonDetail?.type[0]] }">
          {{ pokemonName.toUpperCase() }}
        </h2>
        <span class="pokemon-id">#{{ pokemonDetail?.id }}</span>
        <div class="type-badge" :style="{ backgroundColor: colors[pokemonDetail?.type[0]] }">
          {{ pokemonDetail?.type[0] }}
        </div>
        <img class="poke-image" :src="`${pokemonDetail?.getImageUrl()}`" />
      </div>

      <!-- RIGHT -->
      <div class="info">
        <h3 class="stats-title" :style="{ color: colors[pokemonDetail?.type[0]] }">Stats</h3>

        <div v-for="(value, key) in formattedStats" :key="key" class="stat-item">
          <span class="stat-name">{{ key }}</span>
          <span class="stat-value">{{ value }}</span>

          <div class="stat-bar">
            <div
              class="stat-bar-fill"
              :style="{
                width: value + '%',
                backgroundColor: getBarColor(value),
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <button @click="testNextPokemon">Test next</button> -->
</template>

<style scoped>
/* page center */
.pokedex-page {
  padding: 64px;
}

/* container grid: left big visual, right info */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 420px; /* left flexible, right fixed-ish */
  gap: var(--gap);
  align-items: start;
}
/* image scales responsively */
.poke-image {
  max-width: 100%;
  max-height: 560px;
  object-fit: contain;
  transform-origin: center;
}

.poke-image:hover {
  transform: scale(1.05);
}

/* Right column: info */
.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* header row */
.info-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* title and number */
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
}
/* type badge aligned to right of header */
.type-badge {
  color: black;
  padding: 10px 16px;
  padding-bottom: 12px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 16px;
  align-self: flex-start;
  text-align: center;
  box-shadow: 0 6px 12px rgba(255, 120, 40, 0.12);
}

.pokemon-card {
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: left;
  font-family: sans-serif;
}

.pokemon-header {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 6px;
  margin-top: 8px;
}

.pokemon-name {
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
}

.pokemon-id {
  color: #999;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.pokemon-type {
  display: inline-block;
  margin-top: 6px;
  padding: 4px 10px;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.stats-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.stat-item {
  display: grid;
  grid-template-columns: 110px 40px 1fr;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.stat-name {
  color: #999;
  font-size: 18px;
  font-weight: 600;
}

.stat-value {
  font-weight: 600;
  text-align: right;
  color: var(--stat-value-color);
  padding-right: 10px;
}

.stat-bar {
  height: 6px;
  background-color: var(--stat-bar-bg);
  border-radius: 3px;
  overflow: hidden;
}

.stat-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s ease;
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
</style>

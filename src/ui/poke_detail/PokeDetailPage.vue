<script setup>
import { PokeRepository } from '@/repository/poke_repository'
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// defineProps({
//   pokemonName: String,
// })

const poke = {
  name: 'Charmander',
  number: '004',
  type: 'Fire',
  height: '0.6 m',
  weight: '8.5 kg',
  stats: [
    { name: 'HP', value: 45 },
    { name: 'Attack', value: 60 },
    { name: 'Defense', value: 48 },
    { name: 'Sp. Atk', value: 65 },
    { name: 'Sp. Def', value: 50 },
    { name: 'Speed', value: 45 },
  ],
}

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
  <div class="pokedex-page">
    <div class="container">
      <!-- Big image LEFT -->
      <div class="visual">
        <div class="visual-bg">
          <img
            class="poke-image"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          />
        </div>
      </div>

      <!-- RIGHT -->
      <div class="info">
        <!-- Header: back + name + number -->
        <div class="info-header">
          <button class="back" aria-label="Back">←</button>
          <div class="title-wrap">
            <h1 class="poke-name">{{ poke.name }}</h1>
            <div class="poke-number">#{{ poke.number }}</div>
          </div>
          <div class="type-badge">{{ poke.type }}</div>
        </div>

        <!-- Small meta cards: Height & Weight -->
        <div class="meta-cards">
          <div class="meta-card">
            <div class="meta-label">Height</div>
            <div class="meta-value">{{ poke.height }}</div>
          </div>
          <div class="meta-card">
            <div class="meta-label">Weight</div>
            <div class="meta-value">{{ poke.weight }}</div>
          </div>
        </div>

        <div class="stats">
          <h3 class="stats-title">Stats</h3>
          <ul class="stats-list">
            <li v-for="(s, i) in poke.stats" :key="i" class="stat-row">
              <div class="stat-name">{{ s.name }}</div>
              <div
                class="stat-bar-wrap"
                :aria-valuenow="s.value"
                role="progressbar"
                :aria-label="`${s.name} ${s.value}`"
              >
                <div class="stat-bar" :style="{ width: `${Math.min(s.value, 100)}%` }"></div>
              </div>
              <div class="stat-value">{{ s.value }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <h2>{{ pokeName }}</h2>
  <button @click="testNextPokemon">Test next</button>
</template>

<style scoped>
/* --- Root sizing --- */
:root {
  --max-width: 1200px;
  --gap: 1.25rem; /* 20px if root 16px */
  --card-radius: 12px;
  --soft-shadow: 0 6px 18px rgba(20, 20, 40, 0.06);
  --accent: #ff9a3c; /* fire-like accent */
  --muted: #8a8a8a;
  --bg: linear-gradient(180deg, rgba(255, 245, 238, 0.7), rgba(255, 250, 250, 0.5));
}

/* page center */
.pokedex-page {
  padding: 2rem 1rem;
  background: #fff;
  min-height: 100vh;
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

/* Visual left */
.visual {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* soft rounded background behind the image */
.visual-bg {
  width: 100%;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: radial-gradient(closest-side, rgba(255, 200, 150, 0.12), rgba(255, 240, 230, 0.02));
  box-shadow: var(--soft-shadow);
  padding: 2rem;
  box-sizing: border-box;
}

/* image scales responsively */
.poke-image {
  max-width: 100%;
  max-height: 560px;
  object-fit: contain;
  transform-origin: center;
  /* subtle entrance */
  transition: transform 0.25s ease;
}
.poke-image:hover {
  transform: scale(1.02);
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

/* back button */
.back {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--muted);
}

/* title and number */
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
}
.poke-name {
  margin: 0;
  font-size: 1.75rem; /* 28px */
  font-weight: 700;
}
.poke-number {
  color: var(--muted);
  font-size: 0.95rem;
}

/* type badge aligned to right of header */
.type-badge {
  background: linear-gradient(180deg, #ffb36b, #ff7b3c);
  color: white;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
  align-self: flex-start;
  box-shadow: 0 6px 12px rgba(255, 120, 40, 0.12);
}

/* meta cards (height + weight) */
.meta-cards {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.meta-card {
  background: #fff;
  border-radius: var(--card-radius);
  padding: 0.85rem 1rem;
  min-width: 120px;
  box-shadow: var(--soft-shadow);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.meta-label {
  font-size: 0.8rem;
  color: var(--muted);
}
.meta-value {
  font-weight: 700;
  font-size: 1.05rem;
}

/* Stats area */
.stats {
  margin-top: 0.5rem;
}
.stats-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}
.stats-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}
.stat-row {
  display: grid;
  grid-template-columns: 90px 1fr 40px;
  gap: 0.6rem;
  align-items: center;
}
.stat-name {
  font-size: 0.9rem;
  color: var(--muted);
}
.stat-bar-wrap {
  height: 10px;
  background: #f0f0f0;
  border-radius: 999px;
  overflow: hidden;
}
.stat-bar {
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 150, 70, 0.95), rgba(255, 110, 30, 0.95));
  transition: width 0.5s ease;
}
.stat-value {
  text-align: right;
  font-weight: 600;
  color: #222;
}

/* Responsive: stack columns on small screens */
@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
  }
  .info {
    order: 2;
  }
  .visual {
    order: 1;
  }
  .meta-cards {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
}

/* Very small screens: tighten sizes */
@media (max-width: 420px) {
  .poke-name {
    font-size: 1.25rem;
  }
  .type-badge {
    font-size: 0.8rem;
    padding: 0.25rem 0.6rem;
  }
  .meta-card {
    padding: 0.6rem 0.75rem;
    min-width: 100px;
  }
  .stat-row {
    grid-template-columns: 75px 1fr 36px;
  }
}
</style>

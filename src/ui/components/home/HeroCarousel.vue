<template>
  <div class="main-container">
    <div class="content-container">
      <div class="hero-container">
        <transition name="fade">
          <div class="hero" :key="currentItem.id">
            <img class="hero-image" :src="currentItem.background" />

            <div class="hero-info">
              <img class="poster-img" :src="currentItem.image" />

              <h2>{{ currentItem.title }}</h2>
              <p>{{ currentItem.duration }}</p>
            </div>
          </div>
        </transition>
      </div>

      <div class="upnext-container">
        <h3>Up next</h3>
        <div class="upnext-list">
          <div
            v-for="item in upNextList"
            :key="item.id"
            class="upnext-item"
            @click="selectItem(item)"
          >
            <img :src="item.image" class="thumb" />
            <div class="item-info">
              <p class="title">{{ item.title }}</p>
              <p class="duration">{{ item.duration }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const list = ref([
  {
    id: 1,
    title: 'Stranger Things Season 5',
    duration: '1:20',
    background:
      'https://m.media-amazon.com/images/M/MV5BZjJjN2ZjOTAtYjUwZS00Y2M3LWE4Y2MtNDJiZDlhNDg3YmM1XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_QL75_UY207_CR13,0,140,207_.jpg',
  },
  {
    id: 2,
    title: 'We Have Questions',
    duration: '9:34',
    background:
      'https://m.media-amazon.com/images/M/MV5BZjJjN2ZjOTAtYjUwZS00Y2M3LWE4Y2MtNDJiZDlhNDg3YmM1XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg',

    image:
      'https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_QL75_UY207_CR13,0,140,207_.jpg',
  },
  {
    id: 3,
    title: 'GOAT',
    duration: '2:43',
    background:
      'https://m.media-amazon.com/images/M/MV5BZjJjN2ZjOTAtYjUwZS00Y2M3LWE4Y2MtNDJiZDlhNDg3YmM1XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg',

    image:
      'https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_QL75_UY207_CR13,0,140,207_.jpg',
  },
  {
    id: 4,
    title: 'The Dutchman',
    duration: '1:54',
    background:
      'https://m.media-amazon.com/images/M/MV5BZjJjN2ZjOTAtYjUwZS00Y2M3LWE4Y2MtNDJiZDlhNDg3YmM1XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_QL75_UY207_CR13,0,140,207_.jpg',
  },
])

const currentIndex = ref(0)

const currentItem = computed(() => list.value[currentIndex.value])
const upNextList = computed(() => list.value.filter((_, i) => i !== currentIndex.value))

// --- Auto Slide ---
let interval = null
function startAutoSlide() {
  interval = setInterval(() => {
    nextItem()
  }, 5000) // tự chuyển mỗi 5 giây
}

function nextItem() {
  currentIndex.value = (currentIndex.value + 1) % list.value.length
}

function selectItem(item) {
  const index = list.value.findIndex((i) => i.id === item.id)
  currentIndex.value = index
  resetAutoSlide()
}

function resetAutoSlide() {
  clearInterval(interval)
  startAutoSlide()
}

onMounted(startAutoSlide)
onUnmounted(() => clearInterval(interval))
</script>

<style>
.main-container {
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--max-width);
  height: 100%;
}

.hero-container {
  height: 100%;
  display: flex;
  flex: 6.5;
}

.hero {
  position: relative;
  height: 100%;
  width: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
}

.poster-img {
  width: 165px;
  height: 240px;
  border-radius: 8px;
}

.upnext-container {
  flex: 3.5;
  padding: 20px;
  background: #111;
  overflow-y: auto;
}

.upnext-list {
  margin-top: 10px;
}

.upnext-item {
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s;
}

.upnext-item:hover {
  opacity: 0.85;
}

.thumb {
  width: 70px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

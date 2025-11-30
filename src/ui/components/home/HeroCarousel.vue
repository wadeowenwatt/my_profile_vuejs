<template>
  <div class="main-container">
    <div class="content-container">
      <div class="hero-container">
        <!-- <transition name="fade"> -->
        <div class="hero" :key="currentItem.id">
          <img class="hero-image" :src="currentItem.background" />

          <div class="hero-info">
            <img class="poster-img" :src="currentItem.image" />

            <svg
              class="play-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffffff"
              role="presentation"
            >
              <path
                d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"
              ></path>
              <path
                d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
              ></path>
            </svg>
            <div class="hero-info-content">
              <div class="hero-info-text">
                <div class="title">{{ currentItem.title }}</div>
                <div class="duration-text">{{ currentItem.duration }}</div>
              </div>
              <div class="duration-text">Watch Now</div>
            </div>
          </div>
        </div>
        <!-- </transition> -->
      </div>

      <div class="up-next-box">
        <div class="upnext-container">
          <div class="upnext-title" style="padding-bottom: 20px">Up next</div>
          <div class="upnext-list">
            <div
              v-for="item in upNextList"
              :key="item.id"
              class="upnext-item"
              @click="selectItem(item)"
            >
              <img :src="item.image" class="thumb" />

              <div class="column" style="gap: 15px">
                <div class="row play-box">
                  <svg
                    class="play-icon"
                    style="width: 28px; height: 28px"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    role="presentation"
                  >
                    <path
                      d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"
                    ></path>
                    <path
                      d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
                    ></path>
                  </svg>
                  <div class="duration-text" style="font-size: 14px">{{ item.duration }}</div>
                </div>

                <div class="title" style="font-size: 20px">{{ item.title }}</div>
              </div>
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
    title: 'Stranger Things Season 5 Helohehehehehehehe',
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
  // interval = setInterval(() => {
  //   nextItem()
  // }, 5000) // tự chuyển mỗi 5 giây
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
.row {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
}

.main-container {
  padding-top: 20px;
  height: 500px;
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

/* Hero main */
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
  border-radius: 8px;
}

.hero-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-end;
}

.play-icon {
  width: 72px;
  height: 72px;
  cursor: pointer;
}
.play-icon:hover {
  fill: var(--primary-color);
}

.poster-img {
  width: 165px;
  height: 240px;
  border-radius: 8px;
}

.hero-info-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.title {
  font-size: 24px;
  width: 300px;
  font-weight: 400;
}

.duration-text {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
}

.hero-info-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Up next */
.up-next-box {
  flex: 3.5;
  height: 100%;
}

.upnext-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.upnext-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
}

.upnext-list {
  margin-top: 10px;
}

.upnext-item {
  display: flex;
  margin-bottom: 25px;
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
  border-radius: 8px;
}

.play-box {
  gap: 8px;
  align-items: flex-end;
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

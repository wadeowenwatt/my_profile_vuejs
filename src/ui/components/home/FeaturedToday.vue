<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}))

const config = {
  height: 200,
  itemsToShow: 2,
  gap: 5,
}
</script>

<template>
  <div class="main-box">
    <div class="title">Featured Today</div>
    <div class="carousel-box">
      <Carousel v-bind="config">
        <Slide class="slide-item" v-for="image in images" :key="image.id">
          <img :src="image.url" alt="image" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <div class="flex-box" style="flex: 0.35"></div>
    </div>
  </div>
</template>

<style scoped>
.main-box {
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.title {
  max-width: var(--max-width);
  width: 100%;
  color: var(--primary-color);
  font-size: 28px;
  font-weight: 700;
  padding: 20px;
}

.carousel-box {
  display: flex;
  width: var(--max-width);
}

.carousel {
  flex: 0.65;
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

.slide-item {
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

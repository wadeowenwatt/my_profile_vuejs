<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  onclick: {
    type: Function,
    required: false,
  },
})
</script>

<template>
  <div class="filled-button" @click="props.onclick">
    <p>{{ props.title }}</p>
  </div>
</template>

<style>
.filled-button {
  display: flex;
  width: fit-content;
  height: 36px;
  color: black;
  background-color: var(--primary-color);
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  padding: 0px 32px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}
</style>

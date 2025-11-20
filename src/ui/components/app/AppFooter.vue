<script setup>
import AppFilledButton from './AppFilledButton.vue';

function signUp() {
  // Placeholder for sign-up logic
  console.log("hahaha");
}
</script>

<template>
  <div class="footer">
    <div class="content-container">
      <AppFilledButton title="Unlock the full IMDb experience — Sign up now" :onclick="signUp"/>
      
    </div>
  </div>
</template>

<style>
.footer {
  height: 430px;
  background-color: var(--header-footer-bg);
}

.content-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>

<script setup>
import AppButton from './AppButton.vue'

function onSignInClick() {
  console.log('Sign in button clicked')
}
</script>

<template>
  <div class="footer">
    <AppButton title="Sign in for more access" :onclick="onSignInClick" />
    <div class="social-and-app-info">
      <div class="item-container">
        <div class="big-title">Follow IMDb on social</div>
        <div class="social-box">
          <img class="icon-social" src="@/assets/tiktok.svg" alt="Facebook" />
          <img class="icon-social" src="@/assets/instagram.svg" alt="Twitter" />
          <img class="icon-social" src="@/assets/twitter_x.svg" alt="Instagram" />
          <img class="icon-social" src="@/assets/youtube.svg" alt="Instagram" />
          <img class="icon-social" src="@/assets/facebook.svg" alt="Instagram" />
        </div>
      </div>
      <div class="item-container"></div>
    </div>
  </div>
</template>

<style>
/* center content of footer */
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

/* Social and app info download */
.social-and-app-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px 0px;
}

.item-container {
  width: 400px;
  height: 100px;
  border: 2px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.social-box {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 8px;
}

.big-title {
  font-size: 20px;
  font-weight: 600;
}

.icon-social {
  width: 24px;
  height: 24px;
  padding: 0px 8px;
  cursor: pointer;
}
</style>

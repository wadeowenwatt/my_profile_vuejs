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

      <div class="item-container">
        <div class="item-container-content-box">
          <div class="app-download-title-box">
            <div class="big-title">Get the IMDb app</div>
            <div class="normal-title">For Android and iOS</div>
          </div>

          <img style="width: 66px; height: 66px" src="@/assets/qr_image.png" alt="QR Image" />
        </div>
      </div>
    </div>

    <div class="list-ref">
      <a class="item-list" href="#">Help</a>
      <a class="item-list" href="#">Site Index</a>
      <a class="item-list" href="#">IMDbPro</a>
      <a class="item-list" href="#">Box Office Mojo</a>
      <a class="item-list" href="#">License IMDb Data</a>
    </div>
    <div class="list-ref">
      <a class="item-list" href="#">Press Room</a>
      <a class="item-list" href="#">Advertising</a>
      <a class="item-list" href="#">Jobs</a>
      <a class="item-list" href="#">Conditions of Use</a>
      <a class="item-list" href="#">Privacy Policy</a>
      <a class="item-list" href="#">Your Ads Privacy Choices</a>
    </div>

    <div class="infor-text">© 1990-2025 by IMDb.com, Inc.</div>
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
  padding: 24px 0px;
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

.normal-title {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
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

.app-download-title-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.item-container-content-box {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 24px;
}

/* Information text */
.infor-text {
  font-size: 12px;
  padding-top: 16px;
  color: rgba(255, 255, 255, 0.7);
}

/* list item */
.list-ref {
  display: flex;
  gap: 30px;
  padding: 16px 0px;
  flex-wrap: wrap;
  justify-content: center;
}

.item-list {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255);
  text-decoration: none;
}

.item-list:hover {
  text-decoration: underline;
}
</style>

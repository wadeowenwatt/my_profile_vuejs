<script setup></script>

<template>
  <router-view />
</template>

<style>
:root {
  /* light theme (default) */
  --bg: #f7f7fb;
  --header-footer-bg: #080808;
  --text-primary: #111827;
  --card-bg: #ffffff;
  --card-grad-start: #ffffff;
  --card-grad-end: #f1f5f9;
  --box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  --muted: #666666;
  --stat-bar-bg: #e5e5e5;
  --stat-value-color: #333333;
  --max-width: 1500px;
  --gap: 24px;
  --background-secondary: #1a1a1a;
}

.theme-dark {
  --bg: #0e0e0e;
  --text-primary: #c3c3c3;
  --card-bg: rgb(54, 54, 54);
  --card-grad-start: rgb(43, 42, 42);
  --card-grad-end: rgb(27, 27, 27);
  --box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  --muted: #999999;
  --stat-bar-bg: #3b3b3b;
  --stat-value-color: #daa4a4;
}

body {
  font-family: 'Lato', sans-serif;
  background: var(--bg);
  color: var(--text-primary);
  margin: 0;
}
</style>

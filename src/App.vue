<script setup></script>

<template>
  <router-view />
</template>

<style>
:root {
  --bg: black;
  --primary-color: #f5c518;
  --header-footer-bg: rgb(18, 18, 18);
  --text-primary: white;
  --box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  --muted: #666666;
  --stat-bar-bg: #e5e5e5;
  --stat-value-color: #333333;
  --max-width: 1280px;
  --gap: 24px;
  --background-secondary: #1a1a1a;
  --hover-color: rgb(58, 58, 58);
  --border-color: rgb(31, 31, 31);
}

body {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background: var(--bg);
  color: var(--text-primary);
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>

<template>
  <header class="header">
    <div class="container">
      <img src="@/assets/logo.svg" alt="App Logo" />
      <ul class="menu">
        <li class="menu-item">Movies</li>
        <li class="menu-item">TV Shows</li>
        <li class="menu-item">Celebs</li>
        <li class="menu-item">Watch</li>
        <li class="menu-item">Awards</li>
        <li class="menu-item">Community</li>
      </ul>
      <div class="search-bar">
        <div class="search-category">
          <span>All</span>
          <svg
            class="dropdown-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <input type="text" placeholder="Search IMDb" />
        <img src="@/assets/ic_search.svg" alt="Search" />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style>
.header {
  height: 73px;
  position: sticky;
  top: 0;
  background-color: var(--header-footer-bg);
  display: flex;
  align-items: center;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
}

.menu {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0px 28px;
}

.menu-item {
  color: var(--text-primary);
  cursor: pointer;
}

.search-bar {
  max-width: 600px;
  background-color: var(--background-secondary);
  display: flex;
  align-items: center;
  padding: 8px 20px;
  gap: 20px;
  border-radius: 10px;
}

.search-bar input {
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--text-primary);
}

.search-category {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>

<template>
  <header class="header">
    <div class="content-container">
      <img src="@/assets/logo.svg" alt="App Logo" />

      <div class="menu-btn">
        <img src="@/assets/hamburger.svg" alt="menu" style="color: white" />
        <p>Menu</p>
      </div>

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

      <div class="icon-text-button">
        <img src="@/assets/imdb_pro.svg" alt="IMDb Pro" />
      </div>

      <div class="divider"></div>

      <div class="user-actions">
        <div class="icon-text-button">
          <img src="@/assets/bookmark_plus.svg" alt="bookmark" />
          <span>Watchlist</span>
        </div>

        <div class="icon-text-button">
          <span>Sign in</span>
        </div>

        <div class="icon-text-button">
          <span>EN</span>
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
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style>
.header {
  height: 56px;
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: var(--header-footer-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.content-container {
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

/* menu button */
.menu-btn {
  display: flex;
  height: 24px;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 8px;
}

.menu-btn:hover {
  background-color: var(--hover-color);
  padding: 4px 8px;
  border-radius: 100px;
}

/* Search bar */
.search-bar {
  width: 660px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 4px 20px;
  gap: 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  box-sizing: border-box;
}

.search-bar:focus-within {
  border-color: var(--primary-color);
}

.search-bar input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: black;
}

.search-category {
  display: flex;
  align-items: center;
  color: black;
  gap: 8px;
  padding-right: 16px;
  border-right: 1px solid black;
  cursor: pointer;
}

/* divider */
.divider {
  height: 32px;
  width: 2px;
  margin: 0px 8px;
  background-color: rgba(255, 255, 255, 0.16);
}

/* User actions list button */
.user-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-text-button {
  height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 10px;
}

.icon-text-button:hover {
  background-color: var(--hover-color);
  padding: 4px 10px;
  border-radius: 100px;
}
</style>

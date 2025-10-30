import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const STORAGE_KEY = 'app-theme'

export const useThemeStore = defineStore('theme', () => {
  // default to stored value or 'dark' for compatibility with previous UI
  const theme = ref(
    typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) || 'dark' : 'dark',
  )
  const isDark = computed(() => theme.value === 'dark')

  function applyTheme(newTheme) {
    theme.value = newTheme
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('theme-dark', newTheme === 'dark')
      document.documentElement.classList.toggle('theme-light', newTheme === 'light')
    }
    try {
      localStorage.setItem(STORAGE_KEY, newTheme)
    } catch {
      // ignore write errors (e.g. private mode)
    }
  }

  function toggle() {
    applyTheme(isDark.value ? 'light' : 'dark')
  }

  // initialize
  if (typeof document !== 'undefined') {
    applyTheme(theme.value)
  }

  return { theme, isDark, toggle, setTheme: applyTheme }
})

export default useThemeStore

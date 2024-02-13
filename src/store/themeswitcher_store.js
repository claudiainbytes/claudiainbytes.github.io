// store/themeswitcher_store.js
import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';

// themeswitcher as store name to access in each component
export const useThemeSwitcherStore = defineStore('themeSwitcher', () => {

    // Global var
    const current_theme = reactive({ mode:'dark', theme: 'synthwave', icon: 'fa-regular fa-sun'});

    // Getters and Setters
    const getCurrentTheme = computed(() => current_theme );
    
    const setCurrentTheme = (new_theme) => { 
        current_theme.mode = new_theme.mode
        current_theme.theme = new_theme.theme 
        current_theme.icon = new_theme.icon
    };

    // State vars, getters, setters
    return {
      current_theme,
      getCurrentTheme,
      setCurrentTheme
    }

  }, 
  {
	// LocalStorage by default
    persist: true,
  },
);
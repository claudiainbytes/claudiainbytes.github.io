<template>
    <a class="social-media-icon-link" @click="switchTheme"><i :class="[ currentTheme.icon ]"></i></a>
</template>
<script setup>
  import { ref, reactive } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useThemeSwitcherStore } from './../../store/themeswitcher_store'
  
  const themeSwitcherStore = useThemeSwitcherStore()
  const { getCurrentTheme } = storeToRefs(themeSwitcherStore)

  const currentTheme = reactive(themeSwitcherStore.getCurrentTheme)

  const switchTheme = () => {
    if(currentTheme.mode === "dark"){
        themeSwitcherStore.setCurrentTheme({ mode:'light', theme: 'lofi', icon: 'fa-solid fa-moon'})
    } else {
        themeSwitcherStore.setCurrentTheme({ mode:'dark', theme: 'synthwave', icon: 'fa-regular fa-sun'})
    }
    document.querySelector("html").setAttribute("data-theme", currentTheme.theme)
  }

</script>
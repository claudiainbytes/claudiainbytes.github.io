<template>
  <div class="lg:container mx-auto grid grid-cols-12 gap-0">
    <Nav></Nav>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>
<script setup>
  import { ref, reactive } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useThemeSwitcherStore } from './store/themeswitcher_store'
  
  import Nav from './components/Nav.vue' 
  import Header from './components/Header.vue' 
  import Main from './components/Main.vue' 
  import Footer from './components/Footer.vue' 

  const themeSwitcherStore = useThemeSwitcherStore()
  const { getCurrentTheme } = storeToRefs(themeSwitcherStore)
  const currentTheme = reactive(themeSwitcherStore.getCurrentTheme)
  document.querySelector("html").setAttribute("data-theme", currentTheme.theme)

</script>


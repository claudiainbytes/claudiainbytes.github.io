<template>
  <div class="lg:container mx-auto grid grid-cols-12 gap-0" v-if="Object.keys(currentData).length > 0">
    <Nav></Nav>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
  <div class="lg:container mx-auto grid grid-cols-1 gap-0" v-else>
    <p>Data is not available</p>
  </div>
</template>
<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useThemeSwitcherStore } from './store/themeswitcher_store'
  import { useLangSwitcherStore } from './store/langswitcher_store'
  import { useDataStore } from './store/data_store'
  import dataService  from './services/dataService'
  
  import Nav from './components/Nav.vue' 
  import Header from './components/Header.vue' 
  import Main from './components/Main.vue' 
  import Footer from './components/Footer.vue' 

  const themeSwitcherStore = useThemeSwitcherStore()
  const getCurrentTheme = storeToRefs(themeSwitcherStore)
  const currentTheme = reactive(themeSwitcherStore.getCurrentTheme)

  const dataStore = useDataStore()
  const getCurrentData = storeToRefs(dataStore)
  const currentData = reactive(dataStore.getCurrentData)

  onMounted(() => {
    dataService
      .getAllData()
      .then(allData => dataStore.setCurrentData(allData))
      .catch(error => console.log(error))
  })
 
  document.querySelector("html").setAttribute("data-theme", currentTheme.theme)

</script>


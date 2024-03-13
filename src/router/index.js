import { createRouter, createWebHistory } from 'vue-router'

import Intro from '../views/Intro.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',  
        name: 'Intro',
        component: Intro 
      },
      {
        path: '/skills/', 
        name: 'Skills',
        component: Skills 
      },
      {
        path: '/projects/', 
        name: 'Projects',
        component: Projects 
        
      }
    ]
  })
  
  export default router
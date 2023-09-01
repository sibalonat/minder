import { createApp } from 'vue'
import './style.css'

import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue'

import Welcome from "./components/Welcome.vue";
import MindArView from "./components/MindView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Welcome },
        { path: '/mind', component: MindArView },
    ],
  })

createApp(App).use(router).mount('#app')

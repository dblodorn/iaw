import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/Home.vue'
import Story from './components/Story.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App,
      children: [
        { 
          path: '',
          component: Home 
        },
        { 
          path: 'story/:id',
          component: Story 
        }
      ]
    }
  ]
})

new Vue({
	router,
  el: '#app'
})

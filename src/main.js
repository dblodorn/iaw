import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'

const Default = { template: '<div>default</div>' }
const Foo = { template: '<div><p>foo</p></div>' }

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App,
      children: [
        { path: '', component: Default },
        { path: 'story', component: Foo }
      ]
    }
  ]
})

new Vue({
	router,
  el: '#app'
})

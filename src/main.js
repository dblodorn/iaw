import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'

const Parent = {
  template: `
    <div class="parent">
      <h2>Parent</h2>
      <router-view class="child"></router-view>
    </div>
  `
}

const Default = { template: '<div>default</div>' }
const Foo = { template: '<div>foo</div>' }

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App,
      children: [
        { path: '', component: Default },
        { path: 'foo', component: Foo }
      ]
    }
  ]
})

new Vue({
	router,
  el: '#app'
})

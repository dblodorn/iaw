<template lang="pug">
  #app-shell
    header
      ul
        li(v-on:click="classRemove")
          router-link(to="/") {{title}}
        li(v-on:click="classRemove")
          router-link(to="/donate") {{donate}}
    SearchDrawer
</template>

<script>
import SearchDrawer from './SearchDrawer.vue'
import $ from 'jquery'
export default {
  name: 'shell',
  components: {
    SearchDrawer
  },
  data () {
    return {
      title: 'I Am Waters',
      donate: 'Donate'
    }
  },
  methods: {
    classRemove: function (event) {
      $('#search-drawer').removeClass('opened')
    }
  }
}
</script>

<style lang="sass">
  @import "../_sass/utilities/_utilities.sass"
  
  #app-shell
    position: fixed
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    overflow: hidden
    z-index: 10000
    
  header
    position: fixed
    top: 0
    left: 0
    width: 100vw
    border-bottom: 1px solid #000
    
    padding: 0
    height: $header-height
    background: $blue
    z-index: 10000
    a
      +h1
      +no-decoration-hover($white)
    ul
      display: flex
      flex-direction: row
      width: 100vw
      height: 100%
      li
        width: 50%
        display: flex
        padding: 0 $base-spacing
        align-items: center
        &:last-child
          border-left: $border

</style>

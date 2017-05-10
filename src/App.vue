<template lang="pug">
  #app-shell
    header
      ul
        li(v-on:click="classRemove")
          router-link(to="/") {{title}}
        li(v-on:click="classRemove")
          router-link(to="/donate") {{donate}}
    SearchDrawer
    router-view
</template>

<script>
import SearchDrawer from './components/SearchDrawer.vue'
import $ from 'jquery'
export default {
  name: 'app',
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
  @import "./_sass/_utilities.sass"
  
  html
    font-size: 55%
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    +phabletup
      font-size: 62.5%

  body
    font-size: $base-font-size
    overflow-x: hidden
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    margin: 0
    padding: 0
    -webkit-overflow-scrolling: touch
    *
      box-sizing: border-box
      outline: 0
      font-family: $font

  // Content
  #vue-app,
  #app-shell
    position: fixed
    top: 0
    left: 0
  
  section
    position: relative
    z-index: 100

  // Image setup
  img
    width: 100%
    height: auto
    margin-bottom: -3px

  main
    display: flex
    flex-wrap: wrap
    flex-direction: row
    min-height: calc(100vh - #{$header-height})
    width: 100vw
    position: relative
    z-index: 8000
    margin-top: $header-height

  // Typography
  h1,
  h2
    +h1

  p
    font-size: $base-spacing * 2
    line-height: 1.25
  
  // HEADER
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

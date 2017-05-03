<template lang="pug">
  #search-drawer
    .search-wrapper
      input(type="text" v-model="search" placeholder="Find your word…" @keyup.enter="report")
      .close-container(v-on:click="classToggle")
    ul.landing-links
      li(v-for="item in filteredItems")
        router-link(v-bind:to="'/story/' + item.nl") {{ item.nl }}
</template>

<script>
import $ from 'jquery'
export default {
  name: 'search-drawer',
  data () {
    return {
      search: '',
      items: [
        { nl: 'access' },
        { nl: 'children' },
        { nl: 'dream' },
        { nl: 'education' },
        { nl: 'elderly' },
        { nl: 'employment' },
        { nl: 'families' },
        { nl: 'hope' },
        { nl: 'invisible' },
        { nl: 'love' },
        { nl: 'peace' },
        { nl: 'race' },
        { nl: 'shelters' },
        { nl: 'veterans' },
        { nl: 'water' }
      ]
    }
  },
  methods: {
    report: function () {
      let searchValue = this.search
      const links = this.items.filter(item => {
        return item.nl.indexOf(this.search.toLowerCase()) > -1
      })
      if (links.length = 1) {
        this.$router.push({ path: '/story/' + links[0].nl })
      }
    },
    classToggle: function (event) {
      $('#search-drawer').toggleClass('opened')
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
         return item.nl.indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"
  
  #search-drawer
    +transition(transform, 0.125s, ease-in)
    transform: translateX(-(100vw - $header-height))
    position: fixed
    top: $header-height
    left: 0
    height: calc(100vh - #{$header-height})
    overflow: hidden
    z-index: 2000
    
  #search-drawer.opened
    transform: translateX(0)
    overflow: initial
    height: initial
    .close-container
      +close-btn($close : true)

  .search-wrapper
    border-bottom: $border
    padding: 0
    position: relative
    height: $header-height
    width: calc(100vw + 1px)
    background: $white
    z-index: 9000
    display: flex
    align-items: center
    border-right: $border
    background: $white
    input
      +h1
      +no-decoration-hover($blue)
      width: calc(100vw - #{$header-height})
      -webkit-appearance: none
      border: 0
      padding-left: $base-spacing
      caret-color: $dk-grey
      text-transform: capitalize
      color: $blue!important
      &::placeholder
        color: lighten($lt-grey, 10%)
    .close-container
      +close-btn

  ul.landing-links
    position: relative
    width: calc((100vw - #{$header-height}) + 1px)
    height: calc(100vh - (#{$header-height} * 2))
    border-right: $border
    overflow-y: scroll
    background: $white
    &::-webkit-scrollbar
      border-left: $border
      width: $base-spacing / 2
    &::-webkit-scrollbar-thumb
      background-color: $red
      border-left: $border
      outline: 1px solid $white
    li
      width: 100%
      height: $header-height
      padding: 0 $base-spacing
      border-bottom: $border
      display: flex
      align-items: center
      position: relative
    a
      +h1
      +no-decoration-hover($blue)
      text-transform: capitalize

</style>

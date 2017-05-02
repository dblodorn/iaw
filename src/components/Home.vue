<template lang="pug">
  #landing
    .search-wrapper
      input(type="text" v-model="search" placeholder="Find your word…")
    ul.landing-links
      li(v-for="item in filteredItems")
        router-link(v-bind:to="'/story/' + item.nl") {{ item.nl }}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      search: '',
      items: [
        { nl: 'love' },
        { nl: 'hope' },
        { nl: 'peace' },
        { nl: 'dream' },
        { nl: 'children' },
        { nl: 'families' },
        { nl: 'veterans' },
        { nl: 'elderly' },
        { nl: 'invisible' },
        { nl: 'employment' },
        { nl: 'race' },
        { nl: 'education' },
        { nl: 'shelters' },
        { nl: 'access' },
        { nl: 'water' }
      ]
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
  .search-wrapper
    margin-top: $header-height
    border-bottom: $border
    padding: $base-spacing
    position: fixed
    top: 0
    left: 0
    width: 100vw
    background: $white
    z-index: 9000
    input
      +h1
      +no-decoration-hover($blue)
      -webkit-appearance: none
      border: 0
      padding: 0
      caret-color: $dk-grey
      text-transform: capitalize
      &::placeholder
        color: $blue

  ul.landing-links
    margin-top: calc(#{$header-height} + 3vh)
    position: relative
    width: 100vw
    min-height: calc(100vh - #{$header-height})
    li
      width: 100vw
      padding: $base-spacing
      border-bottom: $border
      display: block
      align-items: center
      position: relative
    a
      +h1
      +no-decoration-hover($blue)
      text-transform: capitalize

</style>

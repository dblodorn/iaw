<template lang="pug">
  ul#landing
    li(v-for="item in nav_items")
      router-link(v-bind:to="'/story/' + item.nl") {{ item.nl }}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      nav_items: [
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
        { nl: 'access' }
      ]
    }
  }
}
</script>

<style lang="sass">
  @import "../_sass/utilities/_utilities.sass"
  
  ul#landing
    position: relative
    width: 100vw
    height: calc(100vh - #{$header-height})
    display: flex
    flex-direction: row
    flex-wrap: wrap
    li
      width: 100%
      height: 25%
      padding: $base-spacing
      border-bottom: $border
    a
      +h1
      +no-decoration-hover($blue)
      text-transform: uppercase

</style>

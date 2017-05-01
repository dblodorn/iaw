<template lang="pug">
  ul#landing
    li
      router-link(to="/story/love") Love
    li
      router-link(to="/story/hope") Hope
    li
      router-link(to="/story/peace") Peace
    li
      router-link(to="/story/dream") Dream
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
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
      width: 50%
      height: 50%
      padding: $base-spacing
      &:nth-child(odd)
        border-right: $border
      &:nth-child(1)
        border-bottom: $border
      &:nth-child(2)
        border-bottom: $border
    a
      +h1
      +no-decoration-hover($blue)
      text-transform: uppercase

</style>

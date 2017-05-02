<template lang="pug">
  aside#bg-image(:style="{ 'background-image': 'url(' + media.background + ')' }")
</template>

<script>
export default {
  name: 'story-media',
  props: ['media'],
  data () {
    return {}
  }
}
</script>

<style lang="sass">
  @import "../_sass/utilities/_utilities.sass"
  
  aside
    height: calc(100vh - #{$header-height})
    position: fixed
    top: $header-height
    left: 0
    width: 100vw
    z-index: 0
    background-size: cover
    background-position: center
    background-repeat: no-repeat

</style>

<template lang="pug">
  header
    router-link(to="/") {{msg}}
    ul
      li
        router-link(to="/story/vets") Vets
</template>

<script>
export default {
  name: 'shell',
  data () {
    return {
      msg: 'I AM WATERS'
    }
  }
}
</script>

<style lang="sass">
  @import "../_sass/utilities/_utilities.sass"
  
  header
    position: fixed
    top: 0
    left: 0
    width: 100vw
    border-bottom: 1px solid #000
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 $base-spacing
    height: $header-height
    a
      +h1
      +no-decoration-hover($blue)

</style>

<template lang="pug">
  header
    ul
      li
        router-link(to="/") {{title}}
      li
        router-link(to="/donate") {{donate}}
</template>

<script>
export default {
  name: 'shell',
  data () {
    return {
      title: 'I Am Waters',
      donate: 'Donate'
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

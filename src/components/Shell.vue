<template lang="pug">
  header
    h1 {{msg}}
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
    height: 8vh
    border-bottom: 1px solid #000
    display: flex
    align-items: center
    padding: 0 2vw
    h1
      +h1

</style>

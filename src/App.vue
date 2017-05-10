<template lang="pug">
  #iaw
    Shell
    main
      router-view
</template>

<script>
import Shell from './components/Shell.vue'

export default {
  name: 'app',
  components: {
    Shell
  },
  data () {
    return {
      data: {
        msg: 'I AM WATERS'
      }
    }
  }
}
</script>

<style lang="sass">
  @import "./_sass/main.sass"
  
  #app
    position: fixed
    top: 0
    left: 0

  main
    display: flex
    flex-wrap: wrap
    flex-direction: row
    min-height: calc(100vh - #{$header-height})
    width: 100vw
    position: relative
    z-index: 9000
    margin-top: $header-height

</style>

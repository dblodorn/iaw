<template lang="pug">
  #app
    Shell
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

</style>

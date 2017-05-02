<template lang="pug">
  article#story-text
    h2 {{ message.subhead }}
    p {{ message.copy}}
</template>

<script>
export default {
  name: 'story-text',
  props: ['message'],
  data () {
    return {}
  }
}
</script>

<style lang="sass">
  @import "../_sass/utilities/_utilities.sass"
  
  article
    position: relative
    width: 100%
    padding: $base-spacing 0
    h2
      padding-bottom: $base-spacing / 2

</style>

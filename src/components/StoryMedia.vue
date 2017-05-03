<template lang="pug">
  #media-component
    aside#bg-image(:style="{ 'background-image': 'url(' + media.background + ')' }")
    audio#audio-player(controls autoplay)
      source(v-bind:src="media.audio")
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

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"
  
  audio
    position: fixed
    bottom: 0
    width: 100vw
    z-index: 9000

  aside#bg-image
    +bg-image

</style>

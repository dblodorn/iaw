<template lang="pug">
  section#multi-media-sequence-container(:data-transition-length="transition")
    ul#multi-media-sequence-wrapper
      li.video-container(v-for="(slide, index) in sequencesrc" :id="'sequence-frame-' + index")
</template>

<script>
  export default {
    name: 'multi-media-sequence',
    props: [
      'sequencesrc',
      'transition'
    ],
    data () {
      return {}
    },
    mounted: function () {
      console.log('multi media sequence mounted')
    },
    destroyed: function () {
      console.log('multi media sequence destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  
  video
    transition-property: opacity
    transition-timing-function: ease
    opacity: 0
  
  .video-visible
    opacity: 1

</style>
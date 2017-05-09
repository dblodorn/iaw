<template lang="pug">
  section#media-sequence
    video(:id="'video-' + index" :style="{ transitionDuration: transitionLength + 'ms' }")
      source(:src="videosrc.src")
</template>

<script>
  export default {
    name: 'media-sequence',
    props: ['videosrc','index','transitionLength'],
    data () {
      return {}
    },
    mounted: function () {
      console.log('sequence mounted')
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
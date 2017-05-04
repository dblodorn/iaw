<template lang="pug">
  video(:id="'video-' + index" :style="{ transitionDuration: transitionLength + 'ms' }" preload="auto")
    source(:src="videosrc.src")
</template>

<script>
  export default {
    name: 'video-player',
    props: ['videosrc','index','transitionLength'],
    data () {
      return {}
    },
    mounted: function () {
      console.log('video mounted')
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
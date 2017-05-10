<template lang="pug">
  video(:id="'video-' + index" :style="{ transitionDuration: transitiontime + 'ms' }")
    source(:src="videourl")
</template>

<script>
  export default {
    name: 'video-player',
    props: [
      'index',
      'transitiontime',
      'videourl'
    ]
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
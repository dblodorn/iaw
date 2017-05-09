<template lang="pug">
  section#video-sequence-container
    ul#video-sequence-player(:data-transition-length="transition")
      li.video-container(v-for="(video, index) in videos" :id="'video-frame-' + index")
        video(:id="'video-' + index" :style="{ transitionDuration: transition + 'ms' }")
          source(:src="video.src")
</template>

<script>
  import videoSequenceFunc from '../js/video-sequence-func'
  export default {
    name: 'video-sequence',
    props: [
      'videos',
      'transition'
    ],
    data () {
      return {}
    },
    mounted: function () {
      console.log('video mounted')
      const videoSequence = document.getElementById('video-sequence-player')
      setTimeout(() => {  
        if(videoSequence) { 
          videoSequenceFunc(videoSequence)
        }
      }, 25)
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
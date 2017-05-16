<template lang="pug">
  #media-component
    aside#bg-image(v-if="media.background" :style="{ 'background-image': 'url(' + media.background + ')' }")
    AudioPlayer(v-if="media.audio" :audiosrc="media.audio")
    VideoSequence(v-if="media.media_player == 'video-sequence'" :videos="media.videos" :transition="media.transition_time")
    MultiMediaSequence(v-if="media.media_player == 'multi-media-sequence'" :sequencesrc="media.sequence" :transition="media.transition_time" :layout="media.layout")
    VideoPlayerLoop(v-if="media.media_player == 'video-loop'" :videosrc="media.video_src")
</template>

<script>
  import AudioPlayer from './AudioPlayer.vue'
  import VideoSequence from './VideoSequence.vue'
  import MultiMediaSequence from './MultiMediaSequence.vue'
  import VideoPlayerLoop from './VideoPlayerLoop.vue'
  // JS
  import videoSequenceFunc from '../js/video-sequence-func'
  export default {
    name: 'story-media',
    props: [
      'media'
    ],
    components: {
      AudioPlayer,
      VideoSequence,
      VideoPlayerLoop,
      MultiMediaSequence
    },
    mounted: function () {
      console.log('Media Player Mounted')
    },
    destroyed: function () {
      console.log('story media component destroyed')
    }
  }
</script>

<style lang="sass">
  @import "../_sass/_utilities.sass"
  
  // Global BG
  aside#bg-image
    +bg-image

  // Global Video
  .video-container
    display: block
    position: fixed
    top: 0
    left: 0
    z-index: 0
    height: 100vh
    width: 100vw
    overflow: hidden
    opacity: 1
    z-index: 0
    video
      position: absolute
      min-width: 100%
      min-height: 100%
      width: auto
      height: auto
      z-index: -1000
      overflow: hidden
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      background-color: rgba(0,0,0,0)

</style>

<template lang="pug">
  #media-component
    aside#bg-image(v-if="media.background" :style="{ 'background-image': 'url(' + media.background + ')' }")
    AudioPlayer(v-if="media.audio" :audiosrc="media.audio")
    VideoSequence(v-if="media.media_player == 'video-sequence'" :videos="media.videos" :transition="media.transition_time")
    MultiMediaSequence(v-if="media.media_player == 'multi-media-sequence'" :sequencesrc="media.sequence" :transition="media.transition_time")
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

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"
  
  aside#bg-image
    +bg-image

</style>

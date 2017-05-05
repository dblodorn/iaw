<template lang="pug">
  #media-component
    aside#bg-image(v-if="media.background" :style="{ 'background-image': 'url(' + media.background + ')' }")
    AudioPlayer(v-if="media.audio" :audiosrc="media.audio")
    ul#video-sequence-player(v-if="media.video_player == 'video-sequence'" :data-transition-length="media.transition_time")
      li.video-container(v-for="(video, index) in media.videos" :id="'video-frame-' + index")
        VideoPlayer(:videosrc="video" :index="index" :transitionLength="media.transition_time")
    #video-loop-player.video-container(v-if="media.video_player == 'video-loop'")
      VideoPlayerLoop(:videosrc="media.video_src")
</template>

<script>
  import AudioPlayer from './AudioPlayer.vue'
  import VideoPlayer from './VideoPlayer.vue'
  import VideoPlayerLoop from './VideoPlayerLoop.vue'
  // JS
  import videoSequenceFunc from '../js/video-sequence-func'
  export default {
    name: 'story-media',
    props: ['media'],
    components: {
      AudioPlayer,
      VideoPlayer,
      VideoPlayerLoop
    },
    mounted: function () {
      // MEDIA OBJECTS
      const videoLoop = document.getElementById('video-loop')
      const videoSequence = document.getElementById('video-sequence-player')

      setTimeout(() => {  
        if(videoSequence) { 
          videoSequenceFunc(videoSequence)
        }
      }, 25)

      setTimeout(() => {
        if(videoLoop) {
          const videoLoopPlay = () => { videoLoop.play() }
          videoLoopPlay() 
        }
      }, 25)

    },
    destroyed: function () {
      console.log('component destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"
  
  aside#bg-image
    +bg-image

</style>

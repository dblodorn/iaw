<template lang="pug">
  #media-component
    aside#bg-image(v-if="media.background" :style="{ 'background-image': 'url(' + media.background + ')' }")
    AudioPlayer(v-if="media.audio" :audiosrc="media.audio")
    ul#video-sequence-player(v-if="media.video_player == 'sequence'")
      li.video-container(v-for="(video, index) in media.videos" :id="'video-frame-' + index")
        VideoPlayer(:videosrc="video" :index="index")
    #video-loop-player.video-container(v-if="media.video_player == 'loop'")
      VideoPlayer(:videosrc="video" :index="index")
</template>

<script>
  import AudioPlayer from './AudioPlayer.vue'
  import VideoPlayer from './VideoPlayer.vue'
  import VideoPlayerLoop from './VideoPlayerLoop.vue'
  
  export default {
    name: 'story-media',
    props: ['media'],
    components: {
      AudioPlayer,
      VideoPlayer,
      VideoPlayerLoop
    },
    mounted: function () {
      console.log('mounted media component')
      
      // MEDIA OBJECTS
      const videoLoop = document.getElementById('video-loop')
      const videoSequence = document.getElementById('video-sequence-player')
      
      // Video Sequence
      if(videoSequence) {
        let i = 0
        const videoCount = document.querySelectorAll('.video-container').length
        
        const videoPlayOnce = () => {
          let video = document.getElementById('video-' + i)
          video.classList.add('video-visible')
          video.play()
          setTimeout(() => {
            console.log('playing video ' + i + ' its duration is ' + video.duration)
          }, 5)
          if (i === (videoCount - 1)) {
            i = 0
          } else {
            i++
          }
          video.onended = () => {
            video.classList.remove('video-visible')
            videoPlayOnce()
          }
        }
        videoPlayOnce()
      }

      // Video Loop
      if(videoLoop) {
        const video = videoLoop
        const videoPlayLoop = () => {
          video.play()
        }
        videoPlayLoop()
      }


    }
  }
</script>

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"
  
  aside#bg-image
    +bg-image

</style>

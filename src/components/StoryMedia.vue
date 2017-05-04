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
      // Video Sequence Function
      if(videoSequence) {
        // Globals for Video Player Instance
        const videoCount = document.querySelectorAll('.video-container').length
        const videoOne = document.getElementById('video-1')
        const transitionTime = videoSequence.dataset.transitionLength
        let i = 0
        // Roll The Sequence
        const rollVideo = () => {
          videoOne.addEventListener('loadeddata', function() {
            if (videoOne.readyState === 4) {
              setTimeout(() => {
                videoPlayOnce()
              }, 50)
            }
          })
        }
        // CoreVideoTrigger
        const videoPlayOnce = () => {
          let video = document.getElementById('video-' + i)
              video.classList.add('video-visible')
              video.play()
          // Duration Controls
          let videoNext = document.getElementById('video-' + (i + 1)),
              videoDuration = video.duration,
              videoMs = Math.floor(videoDuration * 1000),
              videoGap = videoMs - transitionTime
          if (i === (videoCount - 1)) {
            i = 0
            videoNext = videoOne
          } else {
            i++
            videoNext = videoNext
          }
          setTimeout(() => {
            videoNext.classList.add('video-visible')
            videoPlayOnce()
          }, (videoGap - transitionTime))  
          setTimeout(() => {
            video.classList.remove('video-visible')
          }, videoGap)
          // Console:
          // console.log('playing video ' + i + ' its duration is ' + videoMs + ' in milliseconds')
        }
        rollVideo()
      }

      // Video Loop Function
      if(videoLoop) {
        const videoLoopPlay = () => { videoLoop.play() }
        videoLoopPlay()
      }

    }
  }
</script>

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"
  
  aside#bg-image
    +bg-image

</style>

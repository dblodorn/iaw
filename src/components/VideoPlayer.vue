<template lang="pug">
  #video-bg
    video#video-player-once(v-if="videosrc.loop == 'false'")
      source(v-bind:src="videosrc.src")
    video#video-player-loop(v-if="videosrc.loop == 'true'" loop)
      source(v-bind:src="videosrc.src")
</template>

<script>
  export default {
    name: 'video-player',
    props: ['videosrc'],
    data () {
      return {}
    },
    mounted: function () {
      const videoOnce = document.getElementById('video-player-once')
      const videoLoop = document.getElementById('video-player-loop')
      if(videoOnce) {
        const video = videoOnce
        const videoPlayOnce = () => {
          video.play()
          video.onended = () => {
            console.log('video over')
          }
        }
        videoPlayOnce()
      }
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
  
  #video-bg
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

<template lang="pug">
  section#video-loop-player.video-container
    video#video-loop(loop)
      source(v-bind:src="videosrc")
</template>

<script>
  export default {
    name: 'video-player-loop',
    props: ['videosrc'],
    data () {
      return {}
    },
    mounted: function () {
      const videoLoop = document.getElementById('video-loop')
      setTimeout(() => {
        if(videoLoop) {
          const videoLoopPlay = () => { videoLoop.play() }
          videoLoopPlay() 
        }
      }, 25)
    }
  }
</script>

<template lang="pug">
  section#video-sequence-container
    ul#video-sequence-player(:data-transition-length="transition")
      li.video-container(v-for="(video, index) in videos" :id="'video-frame-' + index")
        VideoPlayer(:videourl="video.src" :transitiontime="transition" :index="index")
</template>

<script>
  import videoSequenceFunc from '../js/video-sequence-func'
  import VideoPlayer from './VideoPlayer.vue'
  export default {
    name: 'video-sequence',
    props: [
      'videos',
      'transition'
    ],
    components: {
      VideoPlayer
    },
    data () {
      return {}
    },
    mounted: function () {
      console.log('video sequence mounted')
      const videoSequence = document.getElementById('video-sequence-player')
      setTimeout(() => {  
        if(videoSequence) { 
          videoSequenceFunc(videoSequence)
        }
      }, 25)
    },
    destroyed: function () {
      console.log('video sequence destroyed')
    }
  }
</script>
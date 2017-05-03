<template lang="pug">
  #media-component
    aside#bg-image(v-if="media.background" :style="{ 'background-image': 'url(' + media.background + ')' }")
    AudioPlayer(v-if="media.audio" v-bind:audiosrc="media.audio")
    VideoPlayer(v-if="media.video" v-bind:videosrc="media.video")
</template>

<script>
  import AudioPlayer from './AudioPlayer.vue'
  import VideoPlayer from './VideoPlayer.vue'
  export default {
    name: 'story-media',
    props: ['media'],
    components: {
      AudioPlayer,
      VideoPlayer
    },
    mounted: function () {
      console.log('mounted media component')
    }
  }
</script>

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"
  aside#bg-image
    +bg-image
</style>

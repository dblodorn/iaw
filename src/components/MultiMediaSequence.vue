<template lang="pug">
  section#multi-media-sequence-container(:data-transition-length="transition")
    ul#multi-media-sequence-wrapper
      li.video-container(v-for="(slide, index) in sequencesrc" :id="'sequence-frame-' + index")
</template>

<script>
  import videoSequenceFunc from '../js/video-sequence-func'
  import VideoPlayer from './VideoPlayer.vue'
  export default {
    name: 'multi-media-sequence',
    props: [
      'sequencesrc',
      'transition'
    ],
    components: {
      VideoPlayer
    },
    data () {
      return {}
    },
    mounted: function () {
      console.log('multi media sequence mounted')
    },
    destroyed: function () {
      console.log('multi media sequence destroyed')
    }
  }
</script>

<style lang="sass" scoped>

</style>
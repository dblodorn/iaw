<template lang="pug">
  section#multi-media-sequence-container(:data-transition-length="transition" :class="layout")
    ul#multi-media-sequence-wrapper
      li.sequence-slide(v-for="(slide, index) in sequencesrc" :id="'sequence-frame-' + index" :data-slide-type="slide.type")
        .static-container(v-if="slide.type == 'static'" :data-timeout-length="slide.content.timeout_length")
          SequenceStatic(:staticslide="slide.content" :transitiontime="transition" :index="index")
        .video-container(v-if="slide.type == 'video'" )
          VideoPlayer(:videourl="slide.src" :transitiontime="transition" :index="index")
</template>

<script>
  import mediaSequenceFunc from '../js/media-sequence-func'
  import VideoPlayer from './VideoPlayer.vue'
  import SequenceStatic from './SequenceStatic.vue'
  export default {
    name: 'multi-media-sequence',
    props: [
      'sequencesrc',
      'transition',
      'layout'
    ],
    components: {
      VideoPlayer,
      SequenceStatic
    },
    mounted: function () {
      console.log('multi media sequence mounted')
      setTimeout(() => {
        setTimeout(() => { mediaSequenceFunc(true,'.sequence-slide') }, 500)
      }, 2000)
    },
    destroyed: function () {
      console.log('multi media sequence destroyed')
      mediaSequenceFunc(false)
    }
  }
</script>

<style lang="sass" scoped>
  @import "../_sass/_utilities.sass"
  
  section#multi-media-sequence-container
    +full-size

  section#multi-media-sequence-container.full-screen
    ul#multi-media-sequence-wrapper,
    li.sequence-slide
      +full-size
  
  section#multi-media-sequence-container.tiled
    ul#multi-media-sequence-wrapper
      display: flex
      width: 100vw
      flex-direction: row
      flex-wrap: wrap
      li
        width: 50vw
        height: 25vw
        overflow: hidden!important
        display: flex
        position: relative

  // SlideShow
  .slide-visible
    *
      opacity: 1
  .slide-hidden
    opacity: 0

</style>
<template lang="pug">
  video(v-bind:id="'video-' + index")
    source(v-bind:src="videosrc.src")
</template>

<script>
  export default {
    name: 'video-player',
    props: ['videosrc','index'],
    data () {
      return {}
    },
    mounted: function () {
      console.log('video mounted')
    }
  }
</script>

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"

  video
    opacity: 0
  
  .video-visible
    opacity: 1

</style>
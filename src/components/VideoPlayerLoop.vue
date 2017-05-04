<template lang="pug">
  video#video-loop(loop)
    source(v-bind:src="videosrc.src")
</template>

<script>
  export default {
    name: 'video-player-loop',
    props: ['videosrc'],
    data () {
      return {}
    },
    mounted: function () {
      console.log('video loop mounted')
    }
  }
</script>

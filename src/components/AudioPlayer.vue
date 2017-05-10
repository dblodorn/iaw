<template lang="pug">
  audio#audio-player(controls)
    source(v-bind:src="audiosrc")
</template>

<script>
  export default {
    name: 'audio-player',
    props: ['audiosrc'],
    mounted: function () {
      const audio = document.getElementById('audio-player')
      if(audio) {
        const audioPlay = () => {
          audio.play()
          audio.onended = () => {
            console.log('audio ended')
          }
        }
        audioPlay()
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../_sass/_utilities.sass"
  
  audio
    position: fixed
    bottom: 0
    width: 100vw
    z-index: 9000

</style>

<template lang="pug">
  aside#bg-image(:style="{ 'background-image': 'url(' + media.background + ')' }")
</template>

<script>
export default {
  name: 'story-media',
  props: ['media'],
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
  @import "../_sass/utilities/_utilities.sass"
  
  aside#bg-image
    +bg-image

</style>

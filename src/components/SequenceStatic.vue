<template lang="pug">
  article.static-slide(:class="staticslide.slide_class" :id="'static-slide-' + index" :style="{ 'background-image': 'url(' + staticslide.background + ')', 'background-color': staticslide.background_color }")
    h1 {{ staticslide.headline }}
    p {{ staticslide.copy}}
</template>

<script>
export default {
  name: 'sequence-static',
  props: [
    'staticslide',
    'index'
  ]
}
</script>

<style lang="sass">
  @import "../_sass/_utilities.sass"
  
  article.static-slide
    +full-bg
    transition-property: opacity
    transition-timing-function: ease
    position: relative
    width: 100vw
    padding: $base-spacing
    z-index: 100
    min-height: 100%
    opacity: 0

</style>

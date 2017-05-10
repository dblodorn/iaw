<template lang="pug">
  article.static-slide(:class="staticslide.slide_class" :id="'static-slide-' + index")
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
    transition-property: opacity
    transition-timing-function: ease
    position: relative
    width: 100%
    padding: $base-spacing
    z-index: 100
    min-height: 100%
    opacity: 0

</style>

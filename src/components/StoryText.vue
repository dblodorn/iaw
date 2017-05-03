<template lang="pug">
  article#story-text(:class="text.articleclass")
    h1 {{ $route.params.id }}
    p {{ text.copy}}
</template>

<script>
export default {
  name: 'story-text',
  props: ['text'],
  data () {
    return {}
  }
}
</script>

<style lang="sass">
  @import "../_sass/utilities/_utilities.sass"
  
  article
    position: relative
    width: 100%
    padding: $base-spacing
    z-index: 100
    min-height: 100%
    h1
      +h1
      color: $blue
      text-transform: capitalize
      padding-bottom: $base-spacing
    h2
      padding: $base-spacing / 2 0
    p
      font-size: $base-spacing
  
  article.left
    width: 50vw
    align-self: flex-end
    border-left: $border
    background: rgba(255,255,255,0.75)

</style>

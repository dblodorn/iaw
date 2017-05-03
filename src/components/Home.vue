<template lang="pug">
  section#landing
    SearchDrawer
    ul#bottles
      li(v-for="item in bottles")
        router-link(:style="{ 'background-image': 'url(' + item.btl + ')' }" v-bind:to="'/story/' + item.link")
</template>

<script>
import SearchDrawer from './SearchDrawer.vue'
export default {
  name: 'home',
  components: {
    SearchDrawer
  },
  data () {
    return {
      bottles: [
        { 
          btl: 'https://s3-us-west-2.amazonaws.com/14-forty/iaw/bottle-hope.jpg',
          link: 'hope'
        },
        { 
          btl: 'https://s3-us-west-2.amazonaws.com/14-forty/iaw/bottle-dream.jpg',
          link: 'dream'
        },
        { 
          btl: 'https://s3-us-west-2.amazonaws.com/14-forty/iaw/bottle-peace.jpg',
          link: 'peace'
        },
        { 
          btl: 'https://s3-us-west-2.amazonaws.com/14-forty/iaw/bottle-love.jpg',
          link: 'love'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  
  @import "../_sass/utilities/_utilities.sass"
  
  ul#bottles
    width: 100vw
    height: $full-height
    position: fixed
    top: $header-height
    left: 0
    display: flex
    flex-direction: row
    li
      width: 25%
      height: inherit
      a
        width: 100%
        height: 100%
        display: block
        background-position: center
        background-repeat: no-repeat
        background-size: 70%
        cursor: pointer
      &:hover
        a
          background-blend-mode: multiply
          background-color: $red

</style>

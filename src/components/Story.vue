<template lang="pug">
  main(role="main")
    #loader-wrapper(v-if="loading")
      #loader
    div(v-if="error" class="error") 
      h1 {{ error }}
    #story-content(v-if="post" class="content")
      StoryText(v-bind:text="post")
      StoryMedia(v-if="post.media" v-bind:media="post")
</template>

<script>
  import StoryText from './StoryText.vue'
  import StoryMedia from './StoryMedia.vue'
  export default {
    name: 'story',
    components: {
      StoryText,
      StoryMedia
    },
    data () {
      return {
        loading: false,
        post: null,
        error: null
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.post = null
        this.loading = true
        let id = this.$route.params.id
        console.log(id)
        this.axios.get('../assets/data/' + id + '.json').then((response) => {
          this.post = response.data
          this.loading = false
        },(errorResponse) => {
          this.loading = false
          this.error = 'Error: ' + errorResponse.response.status
          console.log(errorResponse)
        })   
      }
    }
  }
</script>

<style lang="sass">
  @import "../_sass/_utilities.sass"
  
  .content
    display: flex
    flex-direction: column
    width: 100vw
    min-height: calc(100vh - #{$header-height})
    
  section#story
    position: relative
    width: 100vw
    min-height: calc(100vh - #{$header-height})
    display: flex
    flex-direction: row
    flex-wrap: wrap

  // LOADER
  @keyframes spin
    0%
      transform: rotate(360deg)
    50%
      transform: rotate(180deg)
    100%
      transform: rotate(0deg)
  
  @keyframes fade
    0%
      opacity: 0
    5%
      opacity: 0
    50%
      opacity: .5
    90%
      opacity: 0
    100%
      opacity: 0

  #loader-wrapper
    animation: fade 6000ms infinite linear
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center
    
  #loader
    width: 50vmin
    height: 50vmin
    border-radius: 25vw
    border-left: 2.5vmin solid grey
    border-right: 2.5vmin solid grey
    border-top: 2.5vmin solid grey
    border-bottom: 2.5vmin solid white
    animation: spin 2000ms infinite linear

</style>

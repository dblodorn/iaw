<template lang="pug">
  section#story
    #loading(v-if="loading")
      h1 Loading...
    div(v-if="error" class="error") 
      h1 {{ error }}
    div(v-if="post" class="content")
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
  @import "../_sass/utilities/_utilities.sass"
  
  .content
    display: flex
    width: 100vw
    flex-direction: column

  section,
  #loading
    position: relative
    width: 100vw
    min-height: calc(100vh - #{$header-height})
    display: flex
    flex-direction: row
    flex-wrap: wrap

    #loading
      background-color: $blue
      position: absolute
      top: 0
      left: 0

</style>

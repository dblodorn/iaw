<template lang="pug">
  section#story
    #loading(v-if="loading")
      h1 Loading...
    div(v-if="error" class="error") 
      h1 {{ error }}
    div(v-if="post" class="content")
      h1 {{ $route.params.id }}
      StoryText(v-bind:message="post")
</template>

<script>
import StoryText from './StoryText.vue'

export default {
  name: 'story',
  components: {
    StoryText
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
      this.axios.get('/assets/data/' + id + '.json').then((response) => {
        this.post = response.data
        setTimeout(() => {
          this.loading = false
        }, 1000)
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
  
  section,
  #loading
    position: relative
    width: 100vw
    min-height: calc(100vh - #{$header-height})
    display: flex
    flex-direction: row
    flex-wrap: wrap
    padding: $base-spacing
    h1
      +h1
      color: $blue
      text-transform: uppercase

    #loading
      background-color: $blue
      position: absolute
      top: 0
      left: 0

</style>

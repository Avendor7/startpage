new Vue({
    el: '#example-1',
    data () {
      return {
        results: null
      }
    },
    mounted () {
      axios
        .get('https://gist.githubusercontent.com/Avendor7/c2ee64a8fdab047766f1a54b9b0ba592/raw/7972b189af631e9893029937cfc59b3798231e60/settings.json')
        .then(response => (this.results = response.data))
    }
  })

  
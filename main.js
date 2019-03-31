new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://gist.githubusercontent.com/Avendor7/c2ee64a8fdab047766f1a54b9b0ba592/raw/aa43e11241ab8579c8f0ff8bc07c9d2646b68e83/settings.json')
        .then(response => (this.info = response))
    }
  })
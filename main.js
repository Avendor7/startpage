new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('./settings.json')
        .then(response => (this.info = response))
    }
  })
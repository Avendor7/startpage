new Vue({
    el: '#addresses',
    data () {
      return {
        addresses: []
      }
    },
    mounted () {
      axios
        .get('https://gist.githubusercontent.com/Avendor7/c2ee64a8fdab047766f1a54b9b0ba592/raw/d95e708e784f3f0495682c4fdd7f9ea28d83a60d/settings.json')
        .then(response => (this.addresses = response.data.addresses))
    }
  })

  
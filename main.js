new Vue({
    el: '#addresses',
    data() {
        return {
            addresses: []
        }
    },
    mounted() {
        axios
            .get('https://raw.githubusercontent.com/Avendor7/Avendor7.github.io/5044ab01e55bb141a99a78c4403195d9b4cac623/settings.json')
            .then(response => (this.addresses = response.data.addresses))
    }
})
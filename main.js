new Vue({
    el: '#addresses',
    data() {
        return {
            addresses: []
        }
    },
    mounted() {
        axios
            .get('https://raw.githubusercontent.com/Avendor7/Avendor7.github.io/master/settings.jsons')
            .then(response => (this.addresses = response.data.addresses))
    }
})
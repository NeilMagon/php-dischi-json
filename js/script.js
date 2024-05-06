const { createApp } = Vue;

createApp({
    data() {
        return {
            discs: [],
        };
    },
    methods: {
        getDiscFromApi(){
            axios.get('server.php').
            then((response) => {
                this.discs = response.data;
            });
        }
        },
        mounted() {
            this.getDiscFromApi();
        },
    },
).mount('#app');
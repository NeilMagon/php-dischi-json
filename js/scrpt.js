const { createApp } = Vue;

createApp({
    data() {
        return {
            cards: [],
        };
    },
    methods: {
        getCardsFromApi(){
            axios.get('server.php').
            then((response) => {
                this.cards = response.data;
            });
        }
        },
        mounted() {
            this.getCardsFromApi();
        },
    },
).mount('#app');
 let app = Vue.createApp({
    data(){
        return {
            modelTest: [
                {quiz: "Which is correct for Vue js ?", ans: 'Framework'},
                {quiz: "Vue is created by ?", ans: 'javascript'},
                {quiz: "Who is vue invented ?", ans: 'evan you'},
            ],
            option: [
                {a: "Library", b: "Framework"},
            ]
        }
    },
    methods: {
        
    }
});

app.mount('#app');
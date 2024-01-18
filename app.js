 let app = Vue.createApp({
    data(){
        return {
            modelTest: [
                {
                    quiz: "Which is correct for Vue js ?", 
                    ans: 'Framework', 
                    A: 'Library', 
                    B: 'Framework', 
                    C: 'Operation',
                    D: 'Software'
                },
                {
                    quiz: "Vue is created by ?", 
                    ans: 'JavaScript',
                    A: 'PHP', 
                    B: 'HTML', 
                    C: 'JavaScript',
                    D: 'Python'
                },
                {
                    quiz: "Who is vue invented ?", 
                    ans: 'evan you',
                    A: 'Bill Gates', 
                    B: 'Even You', 
                    C: 'Brendan Eich',
                    D: 'Jordan'
            },
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
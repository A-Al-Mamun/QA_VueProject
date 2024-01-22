 let app = Vue.createApp({
    data(){
        return {
            isCorrect: null,
            modelTest: [
                {
                    quiz: "Which is correct for Vue js ?", 
                    ans: 'Framework'
                },
            ],
            option: [
                {
                    A: 'Library', 
                    B: 'Framework', 
                    C: 'Operation',
                    D: 'Software'
                }
            ]
        }
    },
    methods: {
        quizAns(e) {
            console.log(this.option.A = e.target.value);
        },
    },
    watch: {
        correction(){
            if(isCorrect == true){
                return "Correct";
            }else{
                return "Incorrect";
            }
        }
    }
});

app.mount('#app');
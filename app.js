 let app = Vue.createApp({
    data(){
        return {
            isCorrect: null,
            myClass: "",
            A: null,
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
            for(item in this.modelTest){
                if(e == 'Framework'){
                    console.log("True")
                }else {
                    console.log("False");
                }
            }
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
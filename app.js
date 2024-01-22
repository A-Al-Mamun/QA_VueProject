 let app = Vue.createApp({
    data(){
        return {
            isCorrect: "",
            myClass: "",
            modelTest: [
                quiz1 = {
                    quiz: "Which is correct for Vue js ?", 
                    ans: 'Framework',
                    A: 'Library', 
                    B: 'Framework', 
                    C: 'Operation',
                    D: 'Software'
                },
                quiz2 = {
                    quiz: "Who is invented Vue ?", 
                    ans: 'Evan You',
                    A: 'Gates', 
                    B: 'Brenden', 
                    C: 'Evan You',
                    D: 'A.A.Mamun'
                },
            ]
            // modelTest: [
            //     {
            //         quiz: "Which is correct for Vue js ?", 
            //         ans: 'Framework',
            //         A: 'Library', 
            //         B: 'Framework', 
            //         C: 'Operation',
            //         D: 'Software'
            //     },
            //     {
            //         quiz: "Who is invented Vue ?", 
            //         ans: 'Evan You',
            //         A: 'Gates', 
            //         B: 'Brenden', 
            //         C: 'Evan You',
            //         D: 'A.A.Mamun'
            //     },
            // ],
            
        }
    },
    methods: {
        quizAns(e) {
            // for(item in this.modelTest){
                if(e == 'Framework'){
                    this.isCorrect = "Correct";
                    // this.isCorrect = e.target.value;
                    // this.isCorrect = this.modelTest[item].ans;
                }else if(e == 'Evan You'){
                    this.isCorrect = "Correct";
                    // this.isCorrect = this.modelTest[item].ans;
                }
                else {
                    this.isCorrect = "False";
                }
            // }
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
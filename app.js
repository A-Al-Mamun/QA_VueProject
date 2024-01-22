 let app = Vue.createApp({
    data(){
        return {
            isCorrect: "",
            myClass: "",
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
                    quiz: "Who is invented Vue ?", 
                    ans: 'Evan You',
                    A: 'Gates', 
                    B: 'Brenden', 
                    C: 'Evan You',
                    D: 'Mamun'
                },
                {
                    quiz: "Who is create this ?", 
                    ans: 'A.A.Mamun',
                    A: 'Rahim', 
                    B: 'Karim', 
                    C: 'Robert',
                    D: 'A.A.Mamun'
                },
            ],
            
        }
    },
    methods: {
        quizAns(e) {
            // for(item in this.modelTest){
                if(e == 'Framework'){
                    this.isCorrect = "Correct";
                    
                    // this.isCorrect = this.modelTest[item].ans;
                }else if(e == 'Evan You'){
                    this.isCorrect = "Correct";
                    // this.isCorrect = this.modelTest[item].ans;
                }else if(e == 'A.A.Mamun'){
                    this.isCorrect = "Correct";
                    // this.isCorrect = this.modelTest[item].ans;
                }else {
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
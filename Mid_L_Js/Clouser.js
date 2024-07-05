let Question = document.querySelector(".questionBox h2");
let ansOption = document.querySelectorAll(".answare");
let NextBtn = document.querySelector("button");


const questions = [
    {
        qs:"What is the old name of BD?",
        choices:["BD","PK","IND","NP","RUS"],
        answare:"RUS"

    },

    {
        qs:"What is Your country?",
        choices:["BD","PK","IND","NP","RUS"],
        answare:"BD"

    },

    {
        qs:"What is neighbour country?",
        choices:["Bangladesh","Pakistan","India","Nepal","Russia"],
        answare:"Pakistan"

    },

    {
        qs:"What is yor enimy country?",
        choices:["BD","PK","IND","NP","RUS"],
        answare:"IND"

    }
]

let counterQuestion = 0;

function main(){
    addQuestion();
    addAnsware();
    NextButton();
}

function NextButton(){
    NextBtn.onclick=()=>{
        counterQuestion++;

        if(counterQuestion>=questions.length){
            counterQuestion = 0;
        }

        addQuestion();
        addAnsware();
        resetBgColor();
    }
}

function addQuestion(){
    Question.innerText = questions[counterQuestion].qs;
}

function addAnsware(){
    ansOption.forEach((e, index)=>{
        e.innerText = questions[counterQuestion].choices[index];
        // console.log(index);  //I didn't understand this index that is why I just print this index....

        e.onclick=()=>{
            checkAns(e);
        }
    })
}

//from here u have set the correct ans & BG color also...
function checkAns(e){
    const correctAns = questions[counterQuestion].answare;
    const selectAns = e.innerText;

    if(selectAns === correctAns){
        e.style.backgroundColor = "green";
    }
    else{
        e.style.backgroundColor = "red";

        ansOption.forEach((e,i)=>{
            if(questions[counterQuestion].choices[i]===correctAns){
                e.style.backgroundColor = "green";
            }
        })
    }
}



function resetBgColor(){
    ansOption.forEach((e)=>{
        e.style.backgroundColor = "";
    })
}


main();

let randnum1 = Math.floor(Math.random()*13)
let randnum2 = Math.floor(Math.random()*13)

let score = 0
let myscore = document.getElementById("score")
//saves the score locally (in the name lol)
localStorage.setItem("finalScore", 0);

let num1 = randnum1
let num2 = randnum2

let playerinput = document.getElementById("answer")
let question = document.getElementById("myquestion")
let nextquestion = document.getElementById("nextquestion")

let myimage = document.getElementById("myrightorwrongimage")

function newquestion(){
    question.innerText = num1 + "x" + num2
    randnum1 = Math.floor(Math.random()*13)
    randnum2 = Math.floor(Math.random()*13)
    nextquestion.innerText = randnum1 + "x" + randnum2
}

function checkans(){
    if (parseInt(playerinput.value) == num1*num2){
        
        playerinput.value = null
        num1 = randnum1
        num2 = randnum2
        score = 1+ Math.floor(score*1.5)
        // Every time the user gets a point, update the save-file
        localStorage.setItem("finalScore", score);
    
        myscore.innerText = score
        newquestion()
    } else {
        myimage.src = "wrongX.png"
        
        if (score >=10){
            score = score-10
            // Every time the user gets a point, update the save-file
            localStorage.setItem("finalScore", score);
        }
        setTimeout(function(){
            myimage.src = ""
        },1000)
        playerinput.value = null
    }
}


newquestion()

// checks 4 keyss that are pressed while inside the input box
playerinput.addEventListener("keypress", function(event) {
    // "Enter" is key code 13
    if (event.key === "Enter") {
        // stops page refreshing
        event.preventDefault();
        checkans();
    }
});
localStorage.setItem("finalScore", 0);
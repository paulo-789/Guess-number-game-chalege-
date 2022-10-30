'use strict';

// console.log(document.querySelector('.highscore').textContent);
// document.querySelector('.highscore').textContent = 'Yeey!';
// document.querySelector(".number").textContent = "5";
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 7;
//to set number btwn 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;
let score = 20;

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess){
        document.querySelector(".message").textContent = "no Number found😢"
    }else if (guess === secretNumber){
        document.querySelector(".message").textContent = "Correct Number😁😎";
        score ++;
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = "blue";
        document.querySelector(".number").style.width = "26rem";

        if (score > highscore ){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }



    }else if (guess > secretNumber ) {
        if(score > 1){
            document.querySelector(".message").textContent = "too High😁😎";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "You Lost😹😌"
        }
       }
       
        else if ( guess < secretNumber) {
            if(score > 1){
            document.querySelector(".message").textContent = "too low😁😎";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "You Lost😹😌"
        }
       }
       
});

document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor = "rgb(6, 65, 96)";
  

})

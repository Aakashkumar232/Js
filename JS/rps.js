let userScore = 0;
let computerScore  = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () =>{
    let options = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "game was draw play again!";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="Rock"){
            // scissor, paper
            userWin = compChoice=== "Paper"? false :true; 
        }

        else if (userChoice ==="Paper"){
            // rock scissor
            userWin = compChoice==="Scissor"? false : true;
        }
        else{
            // rock,paper
            userWin = compChoice === "Rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
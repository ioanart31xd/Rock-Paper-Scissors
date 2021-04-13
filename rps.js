const rock = document.getElementById("rock");
const papyrus = document.getElementById("papyrus");
const scissors = document.getElementById("scissors");
const yourChoice = document.getElementById("your-choice");
const compChoice = document.getElementById("computer-choice");
const winner = document.querySelector(".winner > h2")




function getComputerChoice(){
    const choices = ['rock', 'papyrus', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}



function win(userChoice, computerChoice) {
    winner.innerHTML = userChoice + " beats " + computerChoice + ", you win!"; 

}

function lose(userChoice, computerChoice){
    winner.innerHTML = computerChoice + " beats " + userChoice + ", computer wins!"; 
}

function draw(userChoice, computerChoice){
    winner.innerHTML = "it's a tie!"; 
}



function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "rockscissors":
        case "papyrusrock":
        case "scissorspapyrus":
          win(userChoice, computerChoice);
          break; 

       case "rockpapyrus":
       case "papyrusscissors":
       case "scissorsrock": 
        lose(userChoice, computerChoice);
          break; 

        case "rockrock":
        case "papyruspapyrus":
        case "scissorsscissors": 
         draw(userChoice, computerChoice);
               break; 

    }

}


function main(){

rock.addEventListener("click", function(){
    game("rock"); 
})

papyrus.addEventListener("click", function(){
    game("papyrus"); 
})

scissors.addEventListener("click", function(){
    game("scissors"); 
})

}

main();
const computerSelection=getComputerChoice();
console.log(computerSelection)

const playerSelection=prompt("Enter player choice")
console.log(playerSelection)

function getComputerChoice(){
    //random number between 0-2 to determine rock, paper, scissor
    let randomNum=Math.floor(Math.random()*3)
    if (randomNum===0){
        return "Paper"
    }
    else if (randomNum===1){
        return "Rock"
    }
    else{
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    let playerChoice=playerSelection.toLowerCase()
    if(playerChoice=="rock"){
        if(computerSelection=="Rock"){
            return "It's a tie. Both chose rock"
        }if(computerSelection=="Scissors"){
            return "You win! Rock beats Scissors"
        }else{
            return "You lose. Paper beats rock"
        }
    }
    if(playerChoice=="paper"){
        if(computerSelection=="Rock"){
            return "You win. Paper beats rock"
        }if(computerSelection=="Scissors"){
            return "You lose. Scissors beats paper"
        }else{
            return "It's a tie. Both chose paper"
        }
    }
    if(playerChoice=="scissors"){
        if(computerSelection=="Rock"){
            return "You lose. Rock beats scissors"
        }if(computerSelection=="Scissors"){
            return "It's a tie. Both chose Scissors"
        }else{
            return "You win. Scissors beats paper"
        }
    }
     
}


console.log(playRound(playerSelection, computerSelection));

let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);

function checkGuess() {
    let guessNumber=parseInt(userInput.value);
    if(guessNumber>randomNumber){
        gameResult.textContent="Too High Try Again!.."
        gameResult.style.backgroundColor="#E52345"
    }
    else if(guessNumber<randomNumber){
        gameResult.textContent="Too Low Try Again!.."
        gameResult.style.backgroundColor="#FAE64B";
    }
    else if(guessNumber===randomNumber){
         gameResult.textContent="Congratulations You got Right..."
        gameResult.style.backgroundColor="green";
    }


}
// alert("Connected!")

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("#reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
// var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

// Button listener for Button 1
p1Button.addEventListener("click", function(){

    if(!gameOver){
        //alert("Clicked!");
        p1Score++;      // Incrementing p1 score
        //console.log(p1Score, winningScore);

        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            //console.log("GAME OVER!");
            gameOver = true;
        }
        p1Display.textContent = p1Score ;
    }
    
});

// Button listener for Button 2
p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;      // Incrementing p2 score
        
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }   

})

// When reset button is pressed.
resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");

    gameOver = false;
}

numInput.addEventListener("changed", function(){
    
    winningScoreDisplay.textContent = this.value;
    // same as: winningScoreDisplay.textContent = numInput.value;
    
    winningScore = Number(this.value);
    // same as: winningScore = Number(numInput.value);

    reset();
});
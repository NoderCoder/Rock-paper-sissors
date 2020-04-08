// Functions for the RPS game
function computerplay() {
            let n = Math.floor(Math.random() * Math.floor(3));
            let cAns;
            if (n==0) {cAns="Rock";}
            if (n==1) {cAns="Paper";}
            if (n==2) {cAns="Scissors";}
            return cAns;
    }
function playRound(playerSelection, computerSelection) {
            var pAnsS, pAnsWL;
            if (playerSelection == computerSelection) { pAnsS= "You both selected " + playerSelection + "."; pAnsWL=2; }
            else {
            switch (playerSelection) {
                case "Rock":
                    if (computerSelection == "Scissors") {pAnsS = "Congrats ! you won " + playerSelection + " beats "+ computerSelection +"."; pAnsWL=1;}
                    else { pAnsS = "Sorry you lost ! " + computerSelection + " beats "+  playerSelection +"."; pAnsWL=0; }
                    break;
                case "Paper":
                    if (computerSelection == "Rock") {pAnsS = "Congrats ! you won " + playerSelection + " beats "+ computerSelection +"."; pAnsWL=1;}
                    else { pAnsS = "Sorry you lost ! " + computerSelection + " beats "+  playerSelection +"."; pAnsWL=0; }
                    break;
                case "Scissors":
                    if (computerSelection == "Paper") {pAnsS = "Congrats ! you won " + playerSelection + " beats "+ computerSelection +"."; pAnsWL=1;}
                    else { pAnsS = "Sorry you lost ! " + computerSelection + " beats "+  playerSelection +"."; pAnsWL=0;}
                    break;
                
            }
        }
            return [pAnsS , pAnsWL] ; //pAnsS = string message of the outcome , pAnsWL = outcome 0 = Loss 1 = win 2 = draw  
        } // All the testing code 
function game() {
    var i = 1;
    var hScore, cScore, dScore, Msg, Score;
    cScore = 0;
    hScore = 0;
    dScore = 0;

    // Loop here to run the code for n num of times

        //code to actually call the game
        // let a = prompt("Please Enter Rock, paper or Scissors");
        a = a.charAt(0).toUpperCase() + a.substring(1);
        var b = computerplay();
        [Msg , Score] = playRound(a,b);
        console.log(Msg);
        switch (Score) {
            case 1:
                hScore += 1;
                break;
            case 0:
                cScore +=1;
                break;  
            case 2:
                dScore +=1;
                break;  

        }
        // alert("human Score : " +hScore + "and Computer score : " + cScore + " & draws : " + dScore);

    console.log(hScore);
    console.log(cScore);
    console.log(dScore);
    let gameMsg = document.querySelector("#gameMessage")
    gameMsg.textContent = Msg;
}

//code to  DOM manipulition customElements
const buttons = document.querySelectorAll(".key");
buttons.forEach(button => button.addEventListener('click',callgame));

function callgame(e) {
    a="";
    if (this.id == "rockButton") {a = "Rock"; }
    else if (this.id == "paperButton") {a = "Paper";}
    else if (this.id == "scissorsButton") {a = "Scissors";}
    game();
    console.log(this.id);
}





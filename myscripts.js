//const para = document.querySelector('p');


function computerplay() {
            let n = Math.floor(Math.random() * Math.floor(3));
            let cAns;
            if (n==0) {cAns="Rock";}
            if (n==1) {cAns="Paper";}
            if (n==2) {cAns="Sissors";}
            return cAns;
    }
function playRound(playerSelection, computerSelection) {
            var pAnsS, pAnsWL;
            if (playerSelection == computerSelection) { pAnsS= "you both selected " + playerSelection + "."; pAnsWL=2; }
            else {
            switch (playerSelection) {
                case "Rock":
                    if (computerSelection == "Sissors") {pAnsS = "Congrats ! you won " + playerSelection + " beats "+ computerSelection +"."; pAnsWL=1;}
                    else { pAnsS = "Sorry you lost ! " + computerSelection + " beats "+  playerSelection +"."; pAnsWL=0; }
                    break;
                case "Paper":
                    if (computerSelection == "Rock") {pAnsS = "Congrats ! you won " + playerSelection + " beats "+ computerSelection +"."; pAnsWL=1;}
                    else { pAnsS = "Sorry you lost ! " + computerSelection + " beats "+  playerSelection +"."; pAnsWL=0; }
                    break;
                case "Sissors":
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

    for(i = 1; i<=5; i++ ) {
       console.log("Round " + i + " of total of 5 rounds");

        //code to actually call the game
        let a = prompt("Please Enter Rock, paper or Sissors");
        // let a = "Rock";
        a = a.charAt(0).toUpperCase() + a.substring(1);
        var b = computerplay();
        [Msg , Score] = playRound(a,b);
        console.log(Msg);
        console.log(Score);
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
        alert("human Score : " +hScore + "and Computer score : " + cScore + " & draws : " + dScore);
    }
    console.log(hScore);
    console.log(cScore);
    console.log(dScore);
    

}
game();

let ruleBoard = document.querySelector('.ruleContainer');
let closeBtn = document.querySelector('.closeBg');
let ruleBtn = document.querySelector('.btn-rule');
let closeIcon = document.querySelector('.closeIcon');

let human = document.querySelector(".human");
let computer = document.querySelector(".computer");

let user = document.querySelectorAll('.option');
let machine = document.querySelectorAll('.machine');
let random = Math.floor(Math.random() *3);

let winModal = document.querySelector(".win-modal");
let wmsg = document.querySelector(".wmsg");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");

let playAgain = document.querySelector(".playAgain");
let btnNext = document.querySelector(".btn-next");

let triangle = document.querySelector('.triangle');
let gameContainer = document.querySelector('.gameContainer');
let scoreContainer = document.querySelector('.scoreContainer');
let success = document.querySelector('.success');
// User Score
let score = JSON.parse(localStorage.getItem("score"));
let userScore = document.getElementById("userScore");
if (score) {
    userScore.innerText = score;
}
let usrCount = 0;

// Computer Score
let cscore = JSON.parse(localStorage.getItem("cscore"));
let computerScore = document.getElementById("computerScore");
if (cscore) {
    computerScore.innerText = cscore;
}
let computerCount = 0;


user.forEach((element, index) => {
    element.addEventListener("click", () => {
        human.style.opacity = 1;
        triangle.style.display = "none";
        user.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");
        setTimeout(() => {
            computer.style.opacity = 1;
            setTimeout(() => {
                machine[random].style.display = "block";
                machine[random].classList.add("right");
            }, 700);
        }, 500);
        setTimeout(() => {
            // Draw Condition
            if (usrCount === 15 && computerCount === 15) {
                winModal.style.display = "grid";
                wmsg.style.display = "none";
                winner.innerText = "TIE UP";
                play.innerText = "REPLAY";
            }
            if(random === index){
                winModal.style.display = "grid";
                wmsg.style.display = "none";
                winner.innerText = "Same";
                play.style.display = "none";
                setTimeout(() => {
                    window.location.reload();
                }, 700);
            } 
            // User Win Condition
            else if (index == 0 && random == 1 || index == 1 && random == 2 || index == 2 && random == 0) {          
                usrCount = score;
                usrCount++;
                userScore.innerText = usrCount;
                localStorage.setItem("score", JSON.stringify(usrCount));
                if (usrCount === 15) {
                    btnNext.style.display = "block"; 
                    winModal.style.display = "grid";                    
                    winner.innerText = "You Win";                                 
                }else{
                    setTimeout(() => {
                        window.location.reload();
                    }, 1200);
                }
            } 
            // Computer Win Condition
            else {
                computerCount = cscore;
                computerCount++;
                computerScore.innerText = computerCount;
                localStorage.setItem("cscore", JSON.stringify(computerCount));
                if (computerCount === 15) {
                    winModal.style.display = "grid";
                    winner.innerText = "You Lost";
                    showWinModal();
                }else{
                    setTimeout(() => {
                        window.location.reload();
                    }, 1200);
                }
            }       
        }, 1500);
    });
});

play.addEventListener("click", () => {   
    if (usrCount === 15 || computerCount === 15) {        
        usrCount = 0;
        computerCount = 0;
        userScore.innerText = usrCount;
        computerScore.innerText = computerCount;
        localStorage.setItem("score", JSON.stringify(usrCount));
        localStorage.setItem("cscore", JSON.stringify(computerCount));
    }
    window.location.reload();
});

btnNext.addEventListener('click', () => {
    console.log("Next Button is clicked");
    success.style.display = "flex";
    gameContainer.style.display = "none";
    scoreContainer.style.display = "none";
    winModal.style.display = "none";
    btnNext.style.display = "none";
});


playAgain.addEventListener("click", () => {
    if (usrCount === 15 || computerCount === 15) {        
        usrCount = 0;
        computerCount = 0;
        userScore.innerText = usrCount;
        computerScore.innerText = computerCount;
        localStorage.setItem("score", JSON.stringify(usrCount));
        localStorage.setItem("cscore", JSON.stringify(computerCount));
    }
    window.location.reload();
});

closeBtn.addEventListener('click', () => {
    ruleBoard.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    ruleBoard.style.display = 'none';
});

ruleBtn.addEventListener('click', () => {
    ruleBoard.style.display = 'flex';
});


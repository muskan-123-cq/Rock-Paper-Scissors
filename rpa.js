// let userScore=0;
// let compScore=0;

// const choices=document.querySelectorAll(".choice");
// const msg=document.querySelector("#msg");
// const userS=document.querySelector("#users");
// const compS=document.querySelector("#comps");
// const draw=()=>{
//     msg.innerHTML="Game Was Draw play again";
//     msg.style.backgroundColor="black";
// }
// const show=(userWin,userChoice,compChoice)=>{
//     if(userWin)
//     {
//         userScore++;
//         localStorage.setItem('userScore',userScore);
//         userS.innerText=userScore;
//         msg.innerText= `You Win ! ${userChoice} beats ${compChoice}`;
//          msg.style.backgroundColor="green";
//     }
//     else{
//         compScore++;
//         localStorage.setItem('compScore',compScore);
//         const score=localStorage.getItem('compScore')
//         compS.innerText=JSON.stringify(compScore);
//         msg.innerText=`You Lose ${compChoice} beats ${userChoice}`;
//         msg.style.backgroundColor="red";
//     }
// }


// const genComputerChoice=()=>{
// const options=["rock","paper","scissor"];
// const index=Math.floor(Math.random()*3);
// return options[index];
// }
// const playGame=(userChoice)=>{
// const compChoice=genComputerChoice();
// if(userChoice===compChoice) {
// draw();
// }
// else {
//     let userWin = true;
//     if(userChoice==="rock"){
//        userWin = compChoice==="paper"?false:true;
//     }
//     else if(userChoice==="paper"){
//         userWin=compChoice=="scissor"?false:true;
//     }
//     else{
//       userWin=compChoice==="rock"?false:true;
//     }
//     show(userWin,userChoice,compChoice);
// }

// }
// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userChoice=choice.getAttribute("id");
//        playGame(userChoice);
//     })
// })

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userS = document.querySelector("#users");
const compS = document.querySelector("#comps");

window.onload = () => {
  userScore = localStorage.getItem("userScore") ? parseInt(localStorage.getItem("userScore")) : 0;
  compScore = localStorage.getItem("compScore") ? parseInt(localStorage.getItem("compScore")) : 0;

  userS.innerText = userScore;
  compS.innerText = compScore;
};

const draw = () => {
  msg.innerHTML = "Game Was Draw, play again!";
  msg.style.backgroundColor = "black";
};

const show = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    localStorage.setItem("userScore", userScore);
    userS.innerText = userScore;

    msg.innerText = `You Win! 🎉 ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    localStorage.setItem("compScore", compScore);
    compS.innerText = compScore;

    msg.innerText = `You Lose 😢 ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const playGame = (userChoice) => {
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    show(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

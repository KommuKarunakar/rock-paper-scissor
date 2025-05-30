let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawgame = () => {
    
      msg.innerText="Game Draw";
       msg.style.backgroundColor="black";
    };
const showwinner=(userwin)=>{
    if(userwin){
        userScore++;
        userpara.innerText=userScore;
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
         comppara.innerText=compScore;
         msg.innerText="You lose";
          msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
// console.log("user choice",userChoice);


const compChoice=gencompChoice();
// console.log("comp choice",compChoice);
 if (userChoice === compChoice) {
    
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
     
      userWin = compChoice === "scissors" ? false : true;
    } else {
      
      userWin = compChoice === "rock" ? false : true;
    }
    showwinner(userWin, userChoice, compChoice);
  }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playgame(userChoice);
       
    });
});
 

let playerMove='';
const moves=['rock','paper','scissors'];
let intervalId;
let threebuttons = document.getElementById('threebut');
let resetButton = document.getElementById('resetButton');
let auto=false;
let deletePic1 = document.getElementById('temp1');
let deletePic2 = document.getElementById('temp2');
let store=document.querySelector('.whoWon');
let dispScores={
    Win:0 , 
    Lose:0,
    Tie:0
};
scores();

function autoPlay(){
    if(auto===false){
        threebuttons.style.pointerEvents = 'none';
        resetButton.style.pointerEvents = 'none';
        document.querySelector('.automatic').innerHTML='Stop Play';
        intervalId= setInterval(function(){
            let autoPlayerMove=computerChoice();
            myMove(autoPlayerMove);
        }, 1000);
        auto=true;
    }
    else{
        threebuttons.style.pointerEvents = 'all';
        resetButton.style.pointerEvents = 'all';
        document.querySelector('.automatic').innerHTML='Auto Play';
        clearInterval(intervalId);
        auto=false;
    }
}
function myMove(move){
    playerMove=move;
    // alert('hi');
    let addHere=document.getElementById('temp1');
    addHere.innerHTML=`<img id="rand1" src="./pics/${playerMove}-emoji.png" alt="" >`;
    let toDisplay=computerChoice();
    display(playerMove,toDisplay);
    scores();
    

}
function computerChoice(){
        let randomNumber = Math.floor((Math.random() * 3));
        let computerMove=moves[randomNumber];
        let addHere2= document.getElementById('temp2');
        addHere2.innerHTML=`<img id="rand2" src="./pics/${computerMove}-emoji.png">`
        // alert('called');
        console.log(`Computer's choice is ${randomNumber}`);
        return computerMove;
}
function display(myMove,computerMove){
    let store;
    if((myMove==='rock' && computerMove==='rock') || (myMove==='paper' && computerMove==='paper') || (myMove==='scissors' && computerMove==='scissors')){
        dispScores.Tie++;
        // alert('tie');
        store='Tie';
    }
    else if((myMove==='rock' && computerMove==='scissors') || (myMove==='paper' && computerMove==='rock') || (myMove==='scissors' && computerMove==='paper')){
        dispScores.Win++;
        store='You Win';
    }
    else{
        dispScores.Lose++;
        store='Computer Win';
    }
    
    winner(store);


}
function winner(winning){
    store.innerHTML=`${winning}`;

}
function scores(){
    let totalWins=document.querySelector('.wins');
    let totalTies=document.querySelector('.ties');
    let totalLoses=document.querySelector('.loses');
    totalWins.innerHTML=`${
        'Wins  : ' + dispScores.Win 
    }`;
    totalTies.innerHTML = `${
        '  Ties  : ' + dispScores.Tie
    }`;
    totalLoses.innerHTML = `${
        '  Loses  : '+ dispScores.Lose
    }`;
}
function reset(){
    store.innerHTML = '';
    deletePic1.innerHTML = '';
    deletePic2.innerHTML = '';
    dispScores.Win=0;
    dispScores.Tie=0;
    dispScores.Lose=0;
    scores();
    
}

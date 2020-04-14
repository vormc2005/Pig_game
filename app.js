



var scores, roundScore, activePlayer, gamePlaying;



init();





// document.querySelector("#current-"+activePlayer).innerHTML = "<em>"+dice+"</em>";
//Setting value of sum score
var x = document.querySelector("#score-0").textContent;
console.log(x)



//roll dice function and button



document.querySelector(".btn-roll").addEventListener("click", function () {
    if(gamePlaying){

    
    //dos something here
    //1.Random number
    dice = Math.floor(Math.random() * 6) + 1;
    //2.Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';




    //3.Update round score if number !=1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
}
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying){
//1.add current score to a common score
scores[activePlayer] += roundScore;
//Update UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//Check if the palyaer won the game
if (scores[activePlayer] >= 10) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
} else {
    nextPlayer();
}
//Next player
    }
    

});


function nextPlayer() {

    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('.dice').style.display = "none";


}


document.querySelector(".btn-new").addEventListener('click', init);


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying=true;
    

    document.querySelector(".dice").style.display = "None";

    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');        
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');    
       
        

}


















'use strict';

/*
//          This part selects the element     readTextContent
console.log(document.querySelector('.message').textContent);
//DOM Document object model connection between html and js
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 15;

// JS putting in the number
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

// first time code will react to user input

// const x = function(){
//     console.log(25);
// }
// the above function as a reminder



let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


// document.querySelector('.number').textContent = number;
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    // when no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔ NO NUMBER!!!'; 

        //when you win
    } else if (guess === number){
        document.querySelector('.message').textContent = 'You got it right!!!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b374';

        document.querySelector('.number').style.width = '30rem';


        // checks if current score is greater than highscore
        if (score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        }
        
        // guess too high
    } else if (guess > number) {
        if(score > 1){
            document.querySelector('.message').textContent = 'Guess is too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' 💣 You lost the game';
            document.querySelector('.score').textContent = 0; 
        }


        // guess is too low
    } else if (guess < number) {
        document.querySelector('.message').textContent = 'Guess is too low';
        score--;
        document.querySelector('.score').textContent = score;

        if(score > 1){
            document.querySelector('.message').textContent = 'Guess is too low';
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' 💣 You lost the game';
            document.querySelector('.score').textContent = 0; 
        }
        
        } 
    }
);







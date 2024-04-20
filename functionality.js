`use strict`;
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `Correct Number!`;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){ // When there is no input
        document.querySelector('.message').textContent = 'Not a number!'
        document.querySelector('body').style.backgroundColor = 'red';
    } else if(guess === secretNumber){ // When player wins
        document.querySelector('.message').textContent = `Just right, Play again!`;
        score++;
        document.querySelector('.score').textContent = score;

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if(guess > secretNumber){ // When guess is too high
        if(score > 0){
            document.querySelector('.message').textContent = `Too high!`;
            score--;
            document.querySelector('.score').textContent = score;
            
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').style.width = '30rem';
        } else {
            document.querySelector('.message').textContent = `You lost the game, Play again!`;
        }
    } else if(guess < secretNumber){ // When guess is too low
        if(score > 0){
            document.querySelector('.message').textContent = `Too low!`;
            score--;
            document.querySelector('.score').textContent = score;

            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').style.width = '30rem';
        } else {
            document.querySelector('.message').textContent = `You lost the game, Play again!`;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
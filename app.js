const guessedNumber = document.getElementById('guessed-number');
const submitGuessedNumber = document.getElementById('submit-guess');
const guessList = document.getElementById('guess-list');
const guessedNumbersList = document.getElementById('guessed-numbers-list')
const message = document.getElementById('message');
const hint = document.getElementById('hint');
const newGameBtn = document.getElementById('new-game');

const generateRandomNumber = () => {
    return Math.round(Math.random() * 100);
}
// const init = () => {
//     let turn = 1;
//     let guessesList = [];
// }
let randomNumber = generateRandomNumber();

let turn = 1;

let guessesList = [];

// let messages = {
//     wrongGuess: 'Wrong!',
//     gameOver: '!!!GAME OVER!!!',
//     win: 'Congratulations! You got it right!',
//     lowerGuess: 'Last guess was too low!',
//     greaterGuess: 'Last guess was too high!'
// }
const wrongGuess = 'Wrong!';
const gameOver = '!!!GAME OVER!!!';
const win = 'Congratulations! You got it right!';
const lowerGuess = 'Last guess was too low!';
const greaterGuess = 'Last guess was too high!'

submitGuessedNumber.onclick = () => {
    console.log(randomNumber)

    if (!guessedNumber.value) {
        guessedNumber.value = 0;
    }
    let currentNumber = Number(guessedNumber.value)
    guessesList.push(Number(currentNumber));
    console.log(guessesList)
    if (guessesList.length) {
        guessList.style.display = 'block';
        guessedNumbersList.append(currentNumber);
    }

    if (currentNumber > randomNumber) {
        message.innerHTML = wrongGuess;
        hint.innerHTML = greaterGuess;
    } else if (currentNumber < randomNumber) {
        message.innerHTML = wrongGuess;
        hint.innerHTML = lowerGuess;
    } else {
        submitGuessedNumber.setAttribute('disabled', true);
        message.innerHTML = win;
        hint.innerHTML = '';
        newGameBtn.style.display = 'block';
    }

    guessedNumber.value = '';
    turn++;
    if (turn > 10 && message.innerHTML !== win) {
        message.innerHTML = gameOver;
        submitGuessedNumber.setAttribute('disabled', true);
        hint.innerHTML = '';
        newGameBtn.style.display = 'block';
    }
}

newGameBtn.onclick = () => {
    guessesList = [];
    message.innerHTML = '';
    hint.innerHTML = '';
    submitGuessedNumber.removeAttribute('disabled');
    newGameBtn.style.display = 'none';
    guessList.style.display = 'none';
    guessedNumbersList.innerHTML = '';
    turn = 1;
    randomNumber = generateRandomNumber();
}
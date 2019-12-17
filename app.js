const guessedNumber = document.getElementById('guessed-number');
const submitGuessedNumber = document.getElementById('submit-guess');
const guessList = document.getElementById('guess-list');
const guessedNumbersList = document.getElementById('guessed-numbers-list')
const message = document.getElementById('message');
const hint = document.getElementById('hint');
const newGameBtn = document.getElementById('new-game');

class GuessingGame {
    turn = 1;
    randomNumber = this.generateRandomNumber();
    guessesList = [];

    generateRandomNumber() {
        return Math.round(Math.random() * 100);
    }
}
let guessingGame = new GuessingGame();

let messages = {
    wrongGuess: '<p class="alert alert-danger">Wrong!</p>',
    gameOver: '<p class="alert alert-danger">!!!GAME OVER!!!</p>',
    win: '<p class="alert alert-success">Congratulations! You got it right!</p>',
    lowerGuess: '<p class="alert alert-primary">Last guess was too low!</p>',
    greaterGuess: '<p class="alert alert-primary">Last guess was too high!</p>'
}

submitGuessedNumber.onclick = () => {
    if (!guessedNumber.value) {
        guessedNumber.value = 0;
    }
    let currentNumber = Number(guessedNumber.value)
    guessingGame.guessesList.push(Number(currentNumber));
    if (guessingGame.guessesList.length) {
        guessList.style.display = 'block';
        guessedNumbersList.append(currentNumber + ' ');
    }

    if (currentNumber > guessingGame.randomNumber) {
        message.innerHTML = messages.wrongGuess;
        hint.innerHTML = messages.greaterGuess;
    } else if (currentNumber < guessingGame.randomNumber) {
        message.innerHTML = messages.wrongGuess;
        hint.innerHTML = messages.lowerGuess;
    } else {
        submitGuessedNumber.setAttribute('disabled', true);
        message.innerHTML = messages.win;
        hint.innerHTML = '';
        newGameBtn.style.display = 'block';
    }

    guessedNumber.value = '';
    guessingGame.turn++;
    if (guessingGame.turn > 10 && message.innerHTML !== messages.win) {
        message.innerHTML = messages.gameOver;
        submitGuessedNumber.setAttribute('disabled', true);
        hint.innerHTML = '';
        newGameBtn.style.display = 'block';
    }

}

newGameBtn.onclick = () => {
    message.innerHTML = '';
    hint.innerHTML = '';
    submitGuessedNumber.removeAttribute('disabled');
    newGameBtn.style.display = 'none';
    guessList.style.display = 'none';
    guessedNumbersList.innerHTML = '';
    guessingGame = new GuessingGame();
}
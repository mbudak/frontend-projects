class Hangman {
    
    constructor(word, remainingGuesses){
        this.wordsentence = word;
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
        document.body.style.border = '20px solid #2B292E';
    }
    
    get puzzle() {
        let puzzle = '';
        this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter;
        } else {
            puzzle += '*'
        }
        })
        return puzzle;
    }

    makeGuess (guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (this.status !== 'playing') {
            return;
        }
        if (isUnique){
            this.guessedLetters.push(guess)
        }
            
        if (isUnique && isBadGuess){
            this.remainingGuesses--
        }
        this.calculateStatus();
    }

    get statusMessage() {
        if (this.status === 'playing'){
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}" `
        } else {
            return 'Great work! You guessed the word!'
        }
    }

    calculateStatus(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        console.log('debug', this.wordsentence);
        if (this.remainingGuesses === 0){
            this.gameFailed();
            this.status = 'failed'
        } else if (finished){
            this.gameSuccess();
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    
    gameFailed() {
        const failedColors = ['#e85d04', '#dc2f02', '#9d0208', '#6a040f', '#e85d04', '#dc2f02', '#9d0208', '#6a040f'];
        for (let i = 0; i < failedColors.length; i++) {
            animateBG(i);
        }

        function animateBG(i) {
            setTimeout(function () {
                document.body.style.border = `20px solid ${failedColors[i]}`
            }, 200 * i)
        }
    }

    gameSuccess() {
        document.body.style.border = `20px solid #219ebc`;
    }
}


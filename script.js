//configurar la aplicacion

const mensajeIncial = 'Empieza a adivinar'
const numeroSecreto = Math.floor(Math.random() * 20 + 1)
let score = 21
let highscore = 1

//selecionar elementos del DOM
const messsageField = document.querySelector('.message')
const scoreFile = document.querySelector('.score')
const highscoreFile = document.querySelector('.highscore')
const numeroFile = document.querySelector('.number')
const botonCheck = document.querySelector('.check')
const botonAgain = document.querySelector('.again')
const Npropuesto = document.querySelector('.guess')
//iniciarl la aplicacion
messsageField.textContent = mensajeIncial
scoreFile.textContent = score
highscoreFile.textContent = highscore
numeroFile.textContent = numeroSecreto

//funcionalidad de la aplicacion

botonCheck.addEventListener('click', () => {
    const guessNumber= Number(Npropuesto.value)

    if (guessNumber > numeroSecreto){
        messsageField.textContent = 'Te has pasado'
        score--
        scoreFile.textContent = score
    }else if (guessNumber < numeroSecreto) {
        messsageField.textContent = 'Te has quedo corto'
        score--
        scoreFile.textContent = score
    }
    else {
        messsageField.textContent = 'Has ganado'
    }

})

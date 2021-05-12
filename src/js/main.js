'use strict';

//Mi número random cambia cada vez que la usuaria escribe un número, y debería ser siempre el mismo. 
//Solo tenía que ejecutar la fucnión fuera de la función changeText();
const input = document.querySelector ('.js-input');
const text = document.querySelector ('.js-text');
const button = document.querySelector ('.js-button');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber= getRandomNumber(100);
console.log (`Mi número aleatorio es ${randomNumber}`);

function changeText() {
  const inputValue = input.value;
  if (inputValue > randomNumber) {
    text.innerHTML = 'Demasiado alto.';
  } else if (inputValue < randomNumber) {
    text.innerHTML = 'Demasiado bajo.';
  } else if (parseInt(inputValue) === randomNumber) {
    text.innerHTML = 'Has ganado campeona!!!';
  } else if (typeof inputValue !== 'number') {
    text.innerHTML = 'El número debe estar entre 0 y 100';
  }
  
}

function changeTrials() {
  let trialText = document.querySelector ('.js-trial');
  let trialNumber = parseInt (trialText.innerHTML);
  trialText.innerHTML = trialNumber + 1;
}

function handleButtonClick (event) {
  event.preventDefault();
  changeText ();
  changeTrials ();
}
button.addEventListener ('click', handleButtonClick);
"use strict";const input=document.querySelector(".js-input"),text=document.querySelector(".js-text"),button=document.querySelector(".js-button");function getRandomNumber(e){return Math.ceil(Math.random()*e)}const randomNumber=getRandomNumber(100);function writeText(e){text.innerHTML="'"+e+"'"}function changeText(){const e=parseInt(input.value);e<0||e>100?writeText("El número debe estar entre 0 y 100"):e>randomNumber||e<randomNumber?writeText("Demasiado alto."):e===randomNumber&&writeText("Has ganado campeona!!!")}function changeTrials(){let e=document.querySelector(".js-trial"),t=parseInt(e.innerHTML);e.innerHTML=t+1}function handleButtonClick(e){e.preventDefault(),changeText(),changeTrials()}console.log("Mi número aleatorio es "+randomNumber),button.addEventListener("click",handleButtonClick);
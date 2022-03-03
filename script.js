'use strict'

let rand =  Math.floor(Math.random() * 20 -1);
let score = document.querySelector(".score").innerHTML;
let highscore = document.querySelector(".highscore");


function check() {
let msg = document.querySelector(".message");
let guess = document.querySelector(".guess").value;
let score = Number(document.querySelector(".score").innerHTML);
let resmid = document.querySelector(".number");
let highscore = Number(document.querySelector(".highscore").innerHTML);

if (guess < rand){
    msg.innerHTML="muito baixo";
    document.querySelector(".score").innerHTML = score - 1 ; // diminui 1 ponto por erro 
    
    
    
} else if (guess > rand) {
    msg.innerHTML="muito alto";
    document.querySelector(".score").innerHTML = score - 1; // diminui 1 ponto por erro 
} 
  else if (guess == rand ){
       
    msg.innerHTML="Parábens,Você acertou!";
    document.body.style.backgroundColor = "#60b347";
    resmid.innerHTML = rand; // o número certo aparece na tela do meio
    document.querySelector(".score").innerHTML = `${score}`;
    document.querySelector(".highscore").innerHTML = `${score > highscore ? score : highscore}`;   // se meu score for maior que meu highscore retorna score pro meu html caso contrário mantém o highscore 
    
    
 } 
};

function reload() { // botão de novo, quando clica deixa a tela preta e zera o checar
    const restart = document.getElementById("again");
    let guess = document.querySelector(".guess").value = '';
    let bgblack = document.body.style.backgroundColor = "#000000";
    document.querySelector(".score").innerHTML = 20;
    let resmid = document.querySelector(".number").innerHTML = '?';
    document.querySelector(".message").innerHTML = "Procurando Número..."
    return restart, guess, bgblack, resmid;
};





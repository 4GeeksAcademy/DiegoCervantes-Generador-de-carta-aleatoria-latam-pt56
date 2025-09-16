import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function RandomCard () {
  const palos = ['♣', '♥', '♠', '♦',]
  const valores = ['1','2','3','4','5','6','7','8','9','J','Q','K','A'];
  const palo = palos [Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)]; 
  
  document.getElementById(`top`).textContent = palo
  document.getElementById(`bottom`).textContent = palo
  document.getElementById(`value`).textContent = valor

  document.getElementById(`card`).style.color = (palo === "♥" || palo === "♦") ? 'red' : 'black'
}

window.onload = function() {
  //write your code here
  RandomCard ();
  console.log("Hello Rigo from the console!");
};

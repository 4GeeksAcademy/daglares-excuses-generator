/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["Mi perro ", "Luis Miguel ", "Mi abuela ", "Mi canario "];

  let action = ["se comió ", "orinó ", "robó ", "rompió "];

  let what = ["mi tarea ", "mi teléfono ", "el coche "];

  let when = [
    "antes de clase",
    "en la noche",
    "mientras hacía ejercicio",
    "mientras comía",
    "mientras rezaba"
  ];

  function random(list) {
    let randomNumber = Math.floor(Math.random() * list.length);
    return list[randomNumber];
  }

  let excuse = random(who) + random(action) + random(what) + random(when);

  let excuseGenerator = document.querySelector("#excuseGenerator");
  excuseGenerator.textContent = excuse;
  console.log(excuseGenerator);
};

function pickRandom(lista) {
  let randomNumber = Math.random() * lista.length;
  let roundedNumber = Math.floor(randomNumber);
  return lista[roundedNumber];
}

function generateRandomColor() {
  let color = "#";

  const valoresHexadecimales = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ];

  for (let index = 0; index < 6; index++) {
    color += pickRandom(valoresHexadecimales); // concatenar
  }
  return color;
}

let newColor = generateRandomColor();
let bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = newColor;

const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);

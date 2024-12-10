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
    "mientras rezaba",
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

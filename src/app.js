/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let SUITES = ["spade", "club", "heart", "diamond"];

var RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function() {
  let selectedSuite = getRandomElement(SUITES);
  let selectedRank = getRandomElement(RANKS);

  setCardContent(selectedSuite, selectedRank);
};

function setCardContent(suite, rank) {
  document.querySelector(".rank").classList.add(suite);

  //document.querySelector(".suite-bottom").innerHTML = suite;
  document.querySelector(".rank").innerHTML = rank;
}

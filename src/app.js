/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function() {
  let excuseWho = getRandomElement(who);
  let excuseAction = getRandomElement(action);
  let excuseWhat = getRandomElement(what);
  let excuseWhen = getRandomElement(when);

  document.querySelector("#excuse").innerHTML =
    excuseWho + " " + excuseAction + " " + excuseWhat + " " + excuseWhen;
};

"use strict";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "q",
  "p",
  "r",
  "s",
  "t",
  "u",
  "w",
  "x",
  "y",
  "z",
];
const passwords = ["krystian", "neoteric task", "mentoring"];
const password =
  passwords[Math.floor(Math.random() * passwords.length)].toLowerCase();
let hiddenPassword = "";
let defeatCounter = 0;
let i;
// password hiding
const hidePassword = () => {
  for (i = 0; i < password.length; i++) {
    if (password.charAt(i) === " ") {
      hiddenPassword += " ";
    } else {
      hiddenPassword += "-";
    }
  }
};
//function to send hidden password to HTML
const writePassword = () => {
  document.getElementById("password").innerHTML = hiddenPassword;
};
//initial function
const initialFunction = () => {
  let listItems = "";
  alphabet.map((letter) => {
    return (listItems =
      listItems +
      "<li><button class='keyboard-letter' id=keyboard-letter-" +
      letter +
      " onclick=checkLetter('" +
      letter +
      "')>" +
      letter +
      "</button></li>");
  });
  document.getElementById("keyboard").innerHTML = listItems;
  document.getElementById("image-container").innerHTML =
    '<img class="img-fluid" src="./images/s0.jpg" alt="wisielec"/>';
  hidePassword();
  writePassword();
};
//initial state
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initialFunction();
  }
};
const showLetter = (letter, index) => {
  index.map((i) => {
    return (hiddenPassword =
      hiddenPassword.substring(0, i) +
      letter +
      hiddenPassword.substring(i + 1));
  });
  writePassword();
};
const checkLetter = (letter) => {
  const button = document.getElementById("keyboard-letter-" + letter + "");
  let arrayOfIndexs = [];
  let hit = false;
  for (i = 0; i < password.length; i++) {
    if (letter === password[i]) {
      arrayOfIndexs.push(i);
      hit = true;
    }
  }
  if (hit) {
    showLetter(letter, arrayOfIndexs);
    button.classList.add("succes-button");
  } else {
    defeatCounter++;
    button.classList.add("lost-button");
  }
  button.disabled = true;
  button.classList.add("disabled");
  document.getElementById("image-container").innerHTML =
    '<img class="img-fluid" src="./images/s' +
    defeatCounter +
    '.jpg" alt="wisielec"/>';
  //win
  if (password === hiddenPassword) {
    document.getElementById("modal-hook").innerHTML =
      '<div id="modal"><div class="modal-content win">Nice! You guessed the password! <button class="reset-button" onclick="location.reload()" type="button">Reset</button></div></div>';
  }
  //lost
  if (defeatCounter === 9) {
    document.getElementById("modal-hook").innerHTML =
      '<div id="modal"><div class="modal-content lost">You lost. The password was:<span style="color: #fc481c"> ' +
      password +
      '</span> <button class="reset-button" onclick="location.reload()" type="button">Reset</button></div></div>';
  }
};

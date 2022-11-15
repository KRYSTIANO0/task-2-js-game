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

let password =
  passwords[Math.floor(Math.random() * passwords.length)].toLowerCase();
let hiddenPassword = "";
let defeatCounter = 0;

// password hiding
for (i = 0; i < password.length; i++) {
  if (password.charAt(i) === " ") {
    hiddenPassword = hiddenPassword + "";
  } else {
    hiddenPassword = hiddenPassword + "-";
  }
}

//send hidden password to HTML
const writePassword = () => {
  document.getElementById("password").innerHTML = hiddenPassword;
};

//initial function
const initialFunction = () => {
  let listItems = "";

  alphabet.map((letter, i) => {
    return (listItems =
      listItems +
      "<li class='letter' id=`letter-" +
      letter +
      "` onclick='checkLetter(" +
      letter +
      ")'>" +
      letter +
      "</li>");
  });

  document.getElementById("keyboard").innerHTML = listItems;
  writePassword();
};

window.onload = initialFunction();

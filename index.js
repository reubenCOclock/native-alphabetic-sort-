const alphabetSoup = (str) => {
  let orderArray = [];
  for (let i = 0; i < str.length; i++) {
    orderArray.push(caseLetters(str[i]));
  }
  let wordOrderArray = [];
  let numericalOrderArray = sortOrderArray(orderArray);
  for (let i = 0; i < numericalOrderArray.length; i++) {
    wordOrderArray.push(convertIntToLetter(numericalOrderArray[i]));
  }

  return wordOrderArray.join("");
};

const sortOrderArray = (arr) => {
  let sorted = false;
  while (sorted == false) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        count++;
        sorted = false;
        const splicedIndex = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = splicedIndex;
      }

      if (count == 0) {
        sorted = true;
      }
    }
  }

  return arr;
};

const convertIntToLetter = (int) => {
  if (int == 1) {
    letter = "a";
  }
  if (int == 2) {
    letter = "b";
  }

  if (int == 3) {
    letter = "c";
  }
  if (int == 4) {
    letter = "d";
  }

  if (int == 5) {
    letter = "e";
  }
  if (int == 6) {
    letter = "f";
  }

  if (int == 7) {
    letter = "g";
  }
  if (int == 8) {
    letter = "h";
  }

  if (int == 9) {
    letter = "i";
  }
  if (int == 10) {
    letter = "j";
  }

  if (int == 11) {
    letter = "k";
  }
  if (int == 12) {
    letter = "l";
  }

  if (int == 13) {
    letter = "m";
  }
  if (int == 14) {
    letter = "n";
  }

  if (int == 15) {
    letter = "o";
  }
  if (int == 16) {
    letter = "p";
  }

  if (int == 17) {
    letter = "q";
  }
  if (int == 18) {
    letter = "r";
  }

  if (int == 19) {
    letter = "s";
  }
  if (int == 20) {
    letter = "t";
  }

  if (int == 21) {
    letter = "u";
  }
  if (int == 22) {
    letter = "v";
  }

  if (int == 23) {
    letter = "w";
  }
  if (int == 24) {
    letter = "x";
  }

  if (int == 25) {
    letter = "Y";
  }
  if (int == 26) {
    letter = "Z";
  }

  return letter;
};

const caseLetters = (letter) => {
  if (letter == "a") {
    order = 1;
  }

  if (letter == "b") {
    order = 2;
  }

  if (letter == "c") {
    order = 3;
  }

  if (letter == "d") {
    order = 4;
  }

  if (letter == "e") {
    order = 5;
  }

  if (letter == "f") {
    order = 6;
  }

  if (letter == "g") {
    order = 7;
  }

  if (letter == "h") {
    order = 8;
  }

  if (letter == "i") {
    order = 9;
  }

  if (letter == "j") {
    order = 10;
  }

  if (letter == "k") {
    order = 11;
  }

  if (letter == "l") {
    order = 12;
  }

  if (letter == "m") {
    order = 13;
  }

  if (letter == "n") {
    order = 14;
  }

  if (letter == "o") {
    order = 15;
  }

  if (letter == "p") {
    order = 16;
  }

  if (letter == "q") {
    order = 17;
  }

  if (letter == "r") {
    order = 18;
  }

  if (letter == "s") {
    order = 19;
  }

  if (letter == "t") {
    order = 20;
  }

  if (letter == "u") {
    order = 21;
  }

  if (letter == "v") {
    order = 22;
  }

  if (letter == "w") {
    order = 23;
  }

  if (letter == "x") {
    order = 24;
  }

  if (letter == "y") {
    order = 25;
  }

  if (letter == "z") {
    order = 26;
  }

  return order;
};

console.log(alphabetSoup("bertrand"));

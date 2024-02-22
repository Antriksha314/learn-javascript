const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;

console.log(yearlyRent);

// Data types in javascript
// String
const firstName = "Brian";
const lastName = "Holt";

const concatinateString =
  "Hello " + firstName + " " + lastName + "! How are you?!";

console.log(concatinateString);

const sentence = `Hello ${firstName} ${lastName}! How are you?!`;

console.log(sentence);

// Boolean

const isTheSkyBlue = true;
console.log(isTheSkyBlue);

let newOne;
console.log(newOne);
// let has default value undefiened

// Number
const num = 5;
console.log(num);

// Control flow
let greetig;
if (isTheSkyBlue) {
  greetig = "It must be nice weather";
} else {
  greetig = "It must be bad weather";
}

console.log(greetig);

const myVariable = 10;

// single = is assign
// == is comparing value
// === is comparing value and type

// If statement
if (2 + 2 === 4) {
  console.log("Hooray Math still works");
} else {
  console.log("Uh,panic?");
}

//  Else if statement
const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have all the nachos to myself");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart");
} else {
  console.log("Woooooo, play the dance music");
}

// Loops
let friendsAtYourPartyy = 0;

// while loop

while (friendsAtYourPartyy < 10) {
  // Differnt ways to increment
  //     friendsAtYourPartyy +1
  //   friendsAtYourPartyy += 1;
  friendsAtYourPartyy++;
  //   ++friendsAtYourPartyy
}
console.log(friendsAtYourPartyy);

// for loop
for (let i = 0; i <= 10; i++) {
  friendsAtYourPartyy++;
}

console.log(friendsAtYourPartyy);

const character = "t";
const timeToRepeat = 5;
let loopLength = 0;
let myString = "";

while (loopLength < timeToRepeat) {
  myString = `${myString}${character}`;
  loopLength++;
}

// for (loopLength; loopLength < timeToRepeat; i++){
//     myString += character;
// }

  
console.log(myString);

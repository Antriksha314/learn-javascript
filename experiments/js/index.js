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

// Objects
const person = {
  name: "Test",
  age: 25,
};

console.log("Object keys", Object.keys(person));

// array

const primeNumbers = [10, 1, 2, 3, 5, 7, 11, 13, 17];
// Join method
const join = primeNumbers.join(" | ");

console.log(join);

// push method
const push = primeNumbers.push(19);

console.log(push);

// pop method
const pop = primeNumbers.pop();

console.log("after pop", primeNumbers);

//  Slice method
const slice = primeNumbers.slice(1, 5);

console.log("slice", primeNumbers);

//  Splice method (Remove element from array)
//  first starting index and second no of elements to remove
const splice = primeNumbers.splice(1, 5);

console.log("splice", primeNumbers);

// Replace with splice (Third elemet to replace)
const replaceSplice = primeNumbers.splice(1, 2, 26);

console.log("after replace  splice", replaceSplice);
console.log("after replace primeNumbers", primeNumbers);

// typeOf

console.log("typeof object", typeof {});

// Loop over array

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];
// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
// forEach accept function, it modify only current array
const someFunction = function () {
  return 5;
};
const someOtherFunction = function (fn) {
  return fn();
};

console.log("someOtherFunction", someOtherFunction(someFunction));

// method 2
// for each does not return anything
cities.forEach(function (city) {
  console.log("forEach", city);
});

// Map create new array
// method 3
const newCities = cities.map(function (city) {
  console.log(city);
  return city.toUpperCase();
});

console.log("Map loop", newCities);

// Sort array

// Number Sort array

const sortingFunc = primeNumbers.sort(function (num1, num2) {
  if (num1 > num2) {
    // 1 for positive number,num 1 is greater
    return 1;
  } else if (num2 > num1) {
    // -1 for positive number,num 2 is greater
    return -1;
  }
  // equal number
  return 0;
});
console.log("Sorting", sortingFunc);

const sortingByMapFunc = primeNumbers.map(function (num1, num2) {
  if (num1 > num2) {
    // 1 for positive number,num 1 is greater
    return num1;
  } else if (num2 > num1) {
    // -1 for positive number,num 2 is greater
    return num2;
  }
  // equal number
  return num1;
});
console.log("Sorting by map", sortingByMapFunc);

const revSortingFunc = primeNumbers.sort(function (num1, num2) {
  if (num1 < num2) {
    // 1 for positive number,num 1 is greater
    return 1;
  } else if (num2 < num1) {
    // -1 for positive number,num 2 is greater
    return -1;
  }
  // equal number
  return 0;
});
console.log("Reverse sorting", revSortingFunc);

const revSortingByMapFunc = primeNumbers.map(function (num1, num2) {
  if (num1 < num2) {
    // 1 for positive number,num 1 is greater
    return num2;
  } else if (num2 < num1) {
    // -1 for positive number,num 2 is greater
    return num1;
  }
  // equal number
  return num1;
});
console.log("Reverse sorting by map", revSortingByMapFunc);

// String Sort array
// sort() is only work for type string, for other form use to create function as we
// mention in Number sorting func
const strings = ["a", "f", "c", "b", "d", "e"];
console.log("Sort string", strings.sort());

// for uppercase

const upperStringsSortByMap = strings
  .map(function (str) {
    return str.toUpperCase();
  })
  .sort();

console.log("Sort string by map in uppercase", upperStringsSortByMap);

const numbers = [5, 9, 1, 3, 2, 11, 7];

const anotherMethodForSort = primeNumbers.sort(function (num1, num2) {
  return num1 - num2;
});
console.log("Sort simple", anotherMethodForSort);

const reAnotherMethodForSort = primeNumbers.sort((num1, num2) => num2 - num1);

console.log("Sort rev simple", reAnotherMethodForSort);
// Arrow function
// Implicite return
strings.map((str) => str.toUpperCase()).sort();

const x = "there is some thing";
// string split method convert string into array of letters
const arrayString = x.split("");

const value = arrayString.map((str) => str.toUpperCase()).join("");
console.log(value);

// filter array loop
//  remove false from array and true remain in array
const filterValue = arrayString
  .map((str) => str.toUpperCase())
  .filter((s) => s !== "I")
  .join("");

console.log("filter array loop", filterValue);

// And & Or operations
const a = 28;
const b = 25;
const c = 11;
const isTrue = true;
if (a !== b) {
  console.log("Not equal");
}

if (a === b && b === c && isTrue) {
  console.log("All equal using &&(and) operations");
}

if (a === z || isTrue) {
  console.log("this is an ||(or) operations");
}

// reduce
// const sum = list.reduce((runn, curr) => runn +curr, 0)


// DOM -> Document object model


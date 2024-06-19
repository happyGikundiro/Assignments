// String Transformations:
// a
function capitalize(str) {
  // splitted the string then capitalized the first letter
  let names = str.split("");
  names[0] = names[0].toUpperCase();
  return names.join("");
}
console.log(capitalize("happy"));

// b
// Created a for loop of reversing a string
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse("happy"));

// c
const isPalindrome = (str) => str === reverse(str);
console.log(isPalindrome("happy"));

// d
// const wordCount = (str) => str;
function wordCount(str) {
  let count = 0;
  let word = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !word) {
      word = true;
      count++;
    } else if (str[i] === " ") {
      word = false;
    }
  }

  return count;
}

console.log(wordCount("join"));

// Array Transformations:
// a
const double = (arr) => arr.map((num) => num * 2);
console.log(double([3, 4, 5]));

// b
const filterEven = (arr) => arr.filter((num) => num % 2 !== 0);
console.log(filterEven([3, 4, 5, 6]));

// c
let total = 0;
const Sum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(Sum([2, 4, 6]));

// d
const Average = (arr) => {
  return total / arr.length;
};
console.log(Average([2, 4, 6]));

// Object Transformations:
// a
const person = [
  {
    firstName: "John",
    lastName: "Miles",
    age: 10,
  },
  {
    firstName: "Happy",
    lastName: "Ange",
    age: 20,
  },
  {
    firstName: "Gloria",
    lastName: "Umutoni",
    age: 45,
  },
];

function fullName(person) {
  console.log(person);
  console.log(`${person[0].firstName} ${person[0].lastName}`);
}
fullName(person);

// b
const isAdult = (person) => `${person[0].age}` > 18;
console.log(isAdult(person));

// c
const filterByAge = (people, minAge) => {
  return people.filter((data) => data.age >= minAge);
};
console.log(filterByAge(person, 24));

// Function Composition:
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}
const reverseAndCapitalize = compose(capitalize, reverse);
console.log(reverseAndCapitalize("hello"));

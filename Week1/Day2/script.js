// String Transformations:
// a
const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(Capitalize("happy"));

// b
const Reverse = (str) => str.split("").reverse().join("");
console.log(Reverse("happy"));

// c
const isPalindrome = (str) => str === Reverse(str);
console.log(isPalindrome("happy"));

// d
// const wordCount = (str) => str;

// Array Transformations:
// a
const Double = (arr) => arr.map((num) => num * 2);
console.log(Double([3, 4, 5]));

// b
const FilterEven = (arr) => arr.filter((num) => num % 2 !== 0);
console.log(FilterEven([3, 4, 5, 6]));

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
const person = {
  fullName: "John",
  lastName: "Miles",
  age: 20,
  isAdult: function () {
    if (this.age > 18) {
      return "Older";
    }
    return "Is 18";
  },
};
console.log(person.fullName);

// b
console.log(person.isAdult());

// c

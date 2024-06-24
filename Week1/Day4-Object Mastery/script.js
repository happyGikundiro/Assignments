// 1. Object Creation Basics:
const superhero = {
  name: "Ange",
  secretIdentity: "Giant",
  powers: ["coding", "debugging"],
  weakness: "Honesty",
};

// 2. Methods and Functionality:
(superhero.usePower = function (powerName) {
  console.log(`A super hero ${this.name} has ${this.powers[0]} power`);
  console.log(`A super hero ${this.name} has ${powerName} power`);
}),
  (superhero.revealIdentity = function () {
    console.log(`Hero ${this.name} secret identity is ${this.secretIdentity}`);
  }),
  superhero.usePower();
superhero.revealIdentity();

// 3. Object Constructors:
function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

Superhero.prototype.usePower = function () {
  return `A super hero ${this.name} has ${this.powers[0]} power`;
};

Superhero.prototype.revealIdentity = function () {
  console.log(`Hero ${this.name} secret identity is ${this.secretIdentity}`);
};
// console.log("res:", sample.usePower());

// 4. Prototypal Inheritance:
function Supervillain(name, secretIdentity, powers, weakness) {
  Superhero.call(this, name, secretIdentity, powers, weakness);
}

Supervillain.prototype = Object.create(Superhero.prototype);
const sample = new Supervillain("Lion", "unknown", ["Killer", "giant"], "none");
sample.revealIdentity();

// 5. Object Iteration and Transformation:
// Task 5: Manipulate an array of superheroes and supervillains
let heroes = [
  new Superhero("Lion", "unknown", ["Killer", "giant"], "none"),
  new Superhero(
    "Iron Man",
    "Tony Stark",
    ["intelligence", "wealth", "technology"],
    "ego"
  ),
  new Supervillain("Herry", "none", ["coding", "debugging"], "strong"),
];

// forEach method
heroes.forEach((character) => {
  console.log(character.name);
});

// map method
let names = heroes.map((character) => character.name);
console.log(names);

// filter methos
let superheroes = heroes.filter((character) =>
  character.powers.includes("coding")
);
console.log(superheroes);

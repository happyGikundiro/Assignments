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

// 4. Prototypal Inheritance:
function Supervillain(name, secretIdentity, powers, weakness) {
  Superhero.call(this, name, secretIdentity, powers, weakness);
}

Supervillain.prototype = Object.create(Superhero.prototype);
const sample = new Supervillain("Lion", "unknown", ["Killer", "giant"], "none");
sample.revealIdentity();

// 5. Object Iteration and Transformation:

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

// 6. Advanced Challenge

const players = {
  heroes: {
    ironman: new Superhero(
      "Iron Man",
      "Tony Stark",
      ["intelligence", "technology"],
      "Honesty"
    ),
    spiderman: new Superhero(
      "Spider-Man",
      "Peter Parker",
      ["agility", "spider-sense"],
      "responsibility"
    ),
  },
  villains: {
    joker: new Supervillain(
      "Joker",
      "Unknown",
      ["strength", "debugging"],
      "arrogance"
    ),
    cartoon: new Supervillain("Cartoon", "Giant", ["magic", "Truth"], "pride"),
  },
};

function battle(hero1, hero2) {
  let hero1Power =
    hero1.powers[Math.floor(Math.random() * hero1.powers.length)];
  let hero2Power =
    hero2.powers[Math.floor(Math.random() * hero2.powers.length)];

  console.log(`${hero1.name} uses ${hero1Power}!`);
  console.log(`${hero2.name} uses ${hero2Power}!`);

  let winner;
  if (Math.random() > 0.5) {
    winner = hero1.name;
  } else {
    winner = hero2.name;
  }

  return `${winner} wins the battle!`;
}

document.getElementById("battleButton").addEventListener("click", function () {
  const heroSelect = document.getElementById("heroSelect").value;
  const villainSelect = document.getElementById("villainSelect").value;

  const hero = players.heroes[heroSelect];
  const villain = players.villains[villainSelect];

  const result = battle(villain, hero);
  document.getElementById("result").textContent = result;
});

// 1. Object Methods and this:
const Person = {
  name: "happy",
  age: 10,
  greet: function () {
    console.log(`hello my name is ${this.name} and I'm ${this.age} years old`);
  },
};

const Newperson = {
  name: "new",
  age: 23,
};

// call()
Person.greet.call(Newperson);

// apply()
const Person1 = {
  name: "happy",
  age: 10,
  greet: function (hello) {
    console.log(
      `${hello} my name is ${this.name} and I'm ${this.age} years old`
    );
  },
};
Person1.greet.apply(Newperson, ["Today"]);

// bind
const Gretting = Person.greet.bind(Newperson);
Gretting();

// 2. Event Handlers and this:
const btnEl = document.querySelector("#button");

function handleClick() {
  console.log(this.id);
  console.log(this.textContent);
}

// const handleClick = () => {
//   console.log(this.id);
//   console.log(this.textContent);
// };

btnEl.addEventListener("click", handleClick);

// 3.Private Data with Closures and this:
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(this.count);
    },
    getCount: function () {
      return count;
    },
  };
}

const result = createCounter();
result.increment();
console.log(result.getCount());

//4. Reusable Component with Closure and this.
function createTimer(duration, elementId) {
  let durationInSec = duration;

  function updateTimer() {
    document.getElementById(
      elementId
    ).textContent = `Time remaining: ${durationInSec} seconds`;
  }

  function HandleCounter() {
    if (durationInSec > 0) {
      durationInSec--;
      updateTimer();
    } else {
      clearInterval(timer);
      console.log("Timer finished");
    }
  }
  const timer = setInterval(HandleCounter, 1000);
  console.log(timer);
  updateTimer();
}
createTimer(10, "timer-count");

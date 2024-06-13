// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀

function calculateBMI() {
  const BMI = this.mass / this.height ** 2;
  return BMI;
}

const MarkInfo = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: calculateBMI,
  // calcBMI: function(){
  //     const BMI = this.mass / this.height ** 2;
  //     return BMI;
  // }
};

const JohnInfo = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: calculateBMI,
};

if (MarkInfo.calcBMI() > JohnInfo.calcBMI()) {
  console.log(
    `${MarkInfo.fullName}'s BMI ( ${MarkInfo.calcBMI()}) is higher than ${
      JohnInfo.fullName
    }'s (${JohnInfo.calcBMI()})!`
  );
} else if (MarkInfo.calcBMI() < JohnInfo.calcBMI()) {
  console.log(
    `${JohnInfo.fullName}'s BMI( ${JohnInfo.calcBMI()}) is higher than ${
      MarkInfo.fullName
    }'s (${MarkInfo.calcBMI()})!`
  );
}

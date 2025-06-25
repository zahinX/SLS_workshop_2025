// 1. While loop that prints numbers from 10 to 1
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

// 2. Do...while loop that prints "Hello World" at least once
let condition = false;
do {
  console.log("Hello World");
} while (condition);

// 3. Debug this code
/*
const age = 18;
const age = 21;
console.log(age);

Explanation:
The error is due to trying to declare the same variable 'age' twice using 'const'.
'const' variables cannot be redeclared in the same scope. To fix it, use different names or 'let' if reassignment is needed.
*/

const age = 18;
const age2 = 21;
console.log(age2); // Outputs: 21

// 4. FizzBuzz using while loop from 1 to 20
let i = 1;
while (i <= 20) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  i++;
}

// 5. Temperature check using if-else
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot");
} else if (temperature < 10) {
  console.log("It's cold");
} else {
  console.log("Weather is moderate");
}

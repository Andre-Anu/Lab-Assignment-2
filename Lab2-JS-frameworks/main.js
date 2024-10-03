// src/main.js

// Import the functions from utilities.js using ES modules syntax
import * as L from "./library.js";

// Call the first function (no return, just a print statement)
L.welcomeMessage("André", "Martins", "The Star Carnival");

// Call the second function (Celsius to Fahrenheit conversion)
const tempCelsius = 22.22;
const tempFahrenheit = L.celsiusToFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C is equal to ${tempFahrenheit}°F`);

// Call the third function (square of a number)
const num = 73;
const numSquared = L.square(num);
console.log(`The square of ${num} is ${numSquared}`);

// Call the fourth function (sum of an array of numbers)
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arraySum = L.sumArray(arrayOfNumbers);
console.log(`The sum of the array [${arrayOfNumbers}] is ${arraySum}`);

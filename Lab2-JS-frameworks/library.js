// src/utilities.js

// 1. Function with no return: concatenate parameters with a message
export function welcomeMessage(firstName, lastName, place) {
  console.log(`Welcome ${firstName} ${lastName} to ${place}!`);
}

// 2. Function to convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 3. Function to do a math operation (square of a number in this case)
export function square(number) {
  return number * number;
}

// 4. Advanced function: Calculate the sum of an array of numbers
export function sumArray(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

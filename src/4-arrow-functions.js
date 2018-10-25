// Arrow functions and array methods

let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

// Map method withour arrow function
let doubles = numbers.map(function (n) {
    return n * 2;
});
console.log(doubles);

// With arrow function
let triples = numbers.map(n => n * 3);
console.log(triples);

// Filter example
let pairs = numbers.filter(n => n % 2 == 0);
console.log(pairs);

// Reduce example
// let sum = numbers.reduce((ac, n) => ac + n);
let sum = numbers.reduce((ac, n) => ac + n, 10);
console.log(sum);
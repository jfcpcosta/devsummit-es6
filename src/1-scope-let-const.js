// var name = 'John';
let name = 'Jane';

const pi = 3.1415;
// const is imutable
// pi = 5.2;

// let and const is block scoped
let customer = 'John Doe';
(function () {
    console.log('The name of the customer inside the function is ' + customer);

    if (true) {
        let customer = 'Jane Doe';
        console.log('The name of the customer inside the block is ' + customer);
    }
})();

console.log('The name of the customer outside the function is ' + customer);
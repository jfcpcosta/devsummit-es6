// Destructuring
// The term destructuring means taking objects apart

function getStock() {
    return {
        symbol: 'IBM',
        price: 100.00
    };
}

// ES5 Version
/*let stock = getStock();
let symbol = stock.symbol;
let price = stock.price;*/

// ES6 Version
let {
    symbol,
    price
} = getStock();

console.log(symbol, price);

// With arrays
let [name1, name2] = ['John', 'Jane'];
console.log(name1, name2);

// With Rest operator
let customers = ['John', 'Jane', 'Mary', 'Lou'];
let [firstCustomer, secondCustomer, ...otherCustomers] = customers;
console.log(`The first customer is ${firstCustomer} and the second customer is ${secondCustomer}`);
console.log(`Other customers are ${otherCustomers}`);
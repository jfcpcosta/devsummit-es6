// Generator Functions
// When a browser executes a JavaScript function, it runs without interrupting its own flow to the end. 
// But the execution of a generator function can be paused and resumed multiple times. 
// YIELD, it gets suspended function’s execution by calling next()

function* doSomething() {
    console.log('Started processing');
    yield;
    console.log('Resumed processing');
}

let iterator = doSomething();
iterator.next();
iterator.next();


// pratical example with infinite loop
function* getStockPrice(symbol) {
    while (true) {
        yield Math.random() * 100;
        console.log(`Resuming for ${symbol}`);
    }
}

let priceGenerator = getStockPrice('IBM');
const limitPrice = 15;
let price = 100;

while (price > limitPrice) {
    price = priceGenerator.next().value;
    console.log(`The generator returned ${price}`);
}

console.log(`Buying at ${price}!`);
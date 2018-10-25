// ES5 Version
// In ES5 , writing a function with a variable number of parameters required using a special arguments object

function calcTaxES5() {
    console.log('ES5. Calculating tax for customers with income ', arguments[0]);

    var customers = [].slice.call(arguments, 1);
    customers.forEach(function (customer) {
        console.log('Processing ', customer);
    });
}

calcTaxES5(50000, 'John', 'Jane', 'Mary');

// ES6 Version

function calcTaxES6(income, ...customers) {
    console.log(`ES6. Calculating tax for customers with the income ${income}`);
    customers.forEach(customer => console.log(`Processing ${customer}`));
}

calcTaxES6(50000, 'John', 'Jane', 'Mary');
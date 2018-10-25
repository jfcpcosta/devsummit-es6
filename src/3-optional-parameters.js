// ES5 Version

function calcTaxES5(income, state) {
    state = state || 'Florida';

    console.log('ES5. Calculating tax for resident of ' + state + ' with  the income ' + income);
}

calcTaxES5(50000);

// ES6 Version

function calcTaxES6(income, state = 'Florida') {
    console.log('ES6. Calculating tax for resident of ' + state + ' with  the income ' + income);
}

calcTaxES6(50000);
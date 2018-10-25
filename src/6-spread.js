// Spread Operator

let line = [0, 0, 2, 0, 2];
let test = [2, 4, ...line, 12];
console.log(test);

let sorted = [...line.filter(n => n == 0), ...line.filter(n => n != 0)];
console.log(line, sorted);

// Clone and Clone with spread
const person = {
    name: 'Mary',
    lastName: 'Smith'
};

const clone = Object.assign({}, person);
console.log(clone);

const cloneModified = Object.assign({}, person, {
    lastName: 'Doe'
});
console.log(cloneModified);

// With Spread
const cloneWithSpread = { ...person
};
console.log(cloneWithSpread);

const cloneWithSpreadModified = { ...person,
    lastName: 'Doe'
};
console.log(cloneWithSpreadModified);
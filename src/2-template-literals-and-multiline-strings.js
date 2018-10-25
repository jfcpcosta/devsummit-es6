// ES5 Version
/*const name = 'John Doe';
console.log('Hello, ' + name);*/

// Template Literal
const name = 'John Doe';
console.log(`Hello, ${name}`);

// Multiline String
const template = `
    <div>
        <h1>${name}</h1>
        <p>A very long message</p>
    </div>
`;

console.log(template);
// Classes

// ES5 Version
/*function Student(name) {
    this.name = name;
}

Student.prototype.printName = function () {
    console.log(this.name);
}
Student.prototype.lastName = 'Doe';*/

// ES6 Version
class Student {

    constructor(name) {
        this.name = name;
        this.lastName = 'Doe';
    }

    printName() {
        console.log(this.name);
    }
}

const s1 = new Student('John');
const s2 = new Student('Mary');

s1.printName();
s2.printName();
s2.lastName = 'Smith';

console.log(s1, s2);
console.log(s1.lastName, s2.lastName);
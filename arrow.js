const productTwo = (a, b) => a * b;

console.log(productTwo(1, 2));

let person = {
    name: 'pushkar',
    age: 35,
    greet() {
        console.log('Hi I am ' + this.name); // in normal function this will refer to local scope
    }

    // greet: function () {
    //     console.log('Hi I am ' + this.name); // in normal function this will refer to local scope
    // }

    // greet: () => {
    //     console.log('Hi I am ' + this.name); // in arrow function this will refer to global scope hence undefined will be printed
    // }
};
// person.greet();

let student = {
    name: 'pushkar',
    roll_no: 1,

    printInformation() {
        console.log('Hi my name is ' + this.name + ' and my roll number is : ' + this.roll_no);
    }
}

student.printInformation();
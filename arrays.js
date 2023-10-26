// const array = [1, 2, 12.3234,4];
// console.log(array);
//normal for loop
// for (let data of array) {
//     console.log(data);
// }

//will return new array with performed operation
//const modfiedArray = array.map(i => {
// return i + 20;
// });
// console.log(modfiedArray);

// const array = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
// //output ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon']
// const newArray = array.map(data => {
//     if (data === ' ') {
//         return data + 'empty string';
//     } else
//         return data;
// })
// console.log(newArray);

//spread operator - copies the array or object 
// const array = ['apple', 'oranges', 'kiwi', 'mango', 'watermelon', 'lemon'];
// let copiedArray = [array]; // this will give you array inside of another array
// console.log(copiedArray);
// let copiedArray = [...array]; // this will give you copy of an array   
// console.log(copiedArray);

//rest operator - converts all the arguments list into an array
// const toarray = (...args) => {
//     return args;
// }
// console.log(toarray(1, 2, 3, 4, 5, 7, 8, 9));

//inside const array you can add new values but ca not change the reference of hobbies.
// Does spread operator create a new object or point to the same old object ?
// The spread operator creates a new object.It does not point to the same old object.

// 1) 
// const obj1 = { 'key1': 1 }
// const obj2 = { ...obj1 }
// if (obj2 === obj1) {
//     console.log('same objects')
// }
// else {
//     console.log('different objects') //different objects because spread operator creates a new object
// }

// 2)
const obj1 = { 'key1': 1, 'key2': 2 };
const obj2 = { ...obj1, key1: 1000 };

console.log(obj1);
console.log(obj2);
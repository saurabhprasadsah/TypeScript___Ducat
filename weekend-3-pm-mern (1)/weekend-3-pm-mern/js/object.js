/**
 * 
 * Objects
 * 
 * Literals and properties
 * Square brackets
 * Computed properties
 * Property value shorthand
 * Property names limitations
 * Property existence test, “in” operator
 * The "for..in" loop
 */

// let object = {
//     firstName: 'John',
//     hobbies: ["cricket", "cycling"],
//     details: function() {
//         console.log("detail function called");
//     }
// }

// // .
// console.log(object.firstName);
// console.log(object.hobbies[0]);
// object.details();

// // []
// console.log(object["firstName"]);
// console.log(object["hobbies"][0]);
// object["details"]();

// computed properties

// let key = prompt("enter any key");
// let value = prompt("enter any value");

// let key = "name";
// let value = "deepak"

// let test = function(a , b){
//     return a + b;
// }

// let index = 0;
// let object = {
//     [key] : value,
//     key: 'John',
//     // index: index
//     index
// }

// console.log(object);

// Property names limitations
// let object = {
//     $name: 'name',
//     _name: 'deepak',
//     var: 'deepak',
//     let: 'deepak',
//     const: 'const',
//     function: 'function',
//     break: 'break',
//     case: 'case',
//     continue: 'continue',
// }

// console.log(object);

// The "for..in" loop
// let object = {
//     function: 'function',
//     break: 'break',
//     case: 'case',
//     continue: 'continue',
// }

// for (const key in object) {
//    console.log(key, object[key]);
// }

// console.log("continue1" in object);

// function test() {
//     return {
//         firstName: 'John',
//     }
// }

// console.log(test());

/**
 * 
 * Object references and copying
 * 
 * Comparison by reference
 * 
 * Cloning and merging, Object.assign
 * 
 * Nested cloning
 * 
 * structuredClone
 */

// primitive types

// let number = 10;

// let number1 = number;

// number1 = 20;

// console.log(number, number1);

// reference types

// let array = [10,20,30];

// let array2 = array;

// array2[array2.length] = 40;

// console.log(array);
// console.log(array2);

// let object = {
//     firstName: 'John',
// }

// let object2 = object;

// object2.lastName = 'Doe';

// console.log(object);

// console.log(object2);

// Comparison by reference

// let obj = {}

// let obj2 = obj

// console.log(obj === obj2);

// merge

// let obj = {
//     hobbies: ['cricket', 'cycling']
// }

// let obj2 = {
//     firstName: 'John',
//     lastName: 'Doe',
// }

// let obj3 = Object.assign(obj, obj2, {age: 10})

// console.log(obj , obj3);

// cloning
// let object = {
//     firstName: 'John',
//     lastName: 'Doe',
// }

// let object2 = structuredClone(object);

// object2.age = 10;

// console.log(object);
// console.log(object2);
// console.log(object === object2);



/**
 * 
 * Garbage collection
 * 
 */

/**
 * 
 * Object methods, "this"
 * Method shorthand
 * “this” in methods
 * “this” is not bound
 * Arrow functions have no “this”
 */

// let object = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//         console.log(this.firstName + ' ' + this.lastName);
//         this.age();
//     },
//     // fullName: () => {
//     //     console.log(this);
//         // console.log(this.firstName + ' ' + this.lastName);
//         // this.age();
//     // },
//     age() {
//         console.log(10);
//     }
// }

// object.fullName();

/**
 * Constructor, operator "new"
 * 
 * Constructor function
 * 
 * Constructor mode test: new.target
 * 
 * Return from constructors
 * 
 * Methods in constructor
 */

// function Test(firstName) {
//     this.name = firstName;
//     this.getName = function() {
//         return this.name
//     }
//     return this;
// }

// let emp1 = new Test("deepak");
// let emp2 = new Test('suraj')

// console.log(emp1, emp1.getName());
// console.log(emp2);

// function Test() {
//     console.log(new.target);
// }

// let t = new Test();

/**
 * 
 * Optional chaining '?.'
 * 
 * The “non-existing property” problem
 * 
 * Optional chaining
 * 
 * Short-circuiting
 * 
 * Other variants: ?.(), ?.[]
 */

// let object = {
//     name: {
//         firstName: 'John',
//         lastName: 'Doe',
//     },
//     num: [10,20,30],
//     getName() {
//         console.log( this.name.firstName +  ' ' + this.name.lastName);
//     }
// }

// properties
// console.log(object.name?.firstName);

// array
// console.log(object.num?.[0]);

// function
// object.getName?.();

/**
 * 
 * Symbol type
 * 
 * Symbols 
 * “Hidden” properties
 * Symbols in an object literal
 * Symbols are skipped by for…in
 * Global symbols
 * Symbol.keyFor
 */

// let sym = Symbol('id');

// console.log(sym);

// console.log(sym.description);

// let sym = Symbol('dummy');

// let object = {
//     [sym]: 10,
//     age: 10
// }

// console.log(object[sym]);

// for (const key in object) {
//     console.log(key);
// }

// let sym = Symbol('dummy');
// let sym1 = Symbol('dummy');
// console.log(sym === sym1);

// let sym = Symbol.for('dummy');
// let sym1 = Symbol.for('dummy');

// console.log(sym === sym1);

// console.log(sym.description, Symbol.keyFor(sym));

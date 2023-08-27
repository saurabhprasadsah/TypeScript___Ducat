/**
 * Recursion and stack
 * 
 * The execution context and stack
 */

// recursion

// function test() {
//     test()
// }

// 1 to 10 sum

// let sum = 0

// for (let index = 1; index <= 10; index++) {
//     sum += index
// }

// console.log(sum);

// function addition(value) {
//     let sum = 0;

//     if(value <= 10){
//         sum = value + addition(++value)
//     }

//     return sum;
// }

// let result = addition(1);

// console.log(result);

// 1
// sum = 1 + addition(2)

// 2
// sum = 1 + 2 + addition(3)

// 3
// sum = 1 + 2 + 3 + addition(4)

// 4
// sum = 1 + 2 + 3 + 4 + addition(5)

// 5
// sum = 1 + 2 + 3 + 4 +  5 + addition(6)

// 6
// sum = 1 + 2 + 3 + 4 +  5 + 6  + addition(7)

// 7
// sum = 1 + 2 + 3 + 4 +  5 + 6 + 7 + addition(8)

// 8
// sum = 1 + 2 + 3 + 4 +  5 + 6 + 7 + 8 + addition(9)

// 9
// sum = 1 + 2 + 3 + 4 +  5 + 6 + 7 + 8 + 9 + addition(10)

// 10
// sum = 1 + 2 + 3 + 4 +  5 + 6 + 7 + 8 + 9 + 10 + addition(11)

// 11
// sum = 1 + 2 + 3 + 4 +  5 + 6 + 7 + 8 + 9 + 10 + 0

// 55

// stack
// function func1() {
//     func2();
//     console.log("func1 called");
// }

// function func2() {
//     func3()
//     console.log("func2 called");
// }

// function func3() {
//     console.log("func3 called");
// }

// func1();

// execution context

// console.log(window); // window
// console.log(this); // window

// console.log(a); // undefined

// testing() // testing

// var a = 10;

// function testing() {
//     console.log("testing");
// }

// var testing = function() {
//     console.log("testing");
// }

// var testing = () => {
//     console.log("testing");
// }

// console.log(a);

// let a = 10;

/**
 * 
 * Rest parameters and spread syntax
 * 
 * Rest parameters ...
 * Spread ...
 * 
 * Copy an array/object via spread operator
 */

// Rest Parameter

// function addition(...nums)
// {   
//     let sum = 0;

//     for (const value of nums) {
//         sum += value;
//     }

//     console.log(sum);
// }

// addition(10,20,20,20,50,50,50);

// spread operator ...

// let array = [10,20,30,40];

// console.log(...array);


// let array = [10,20,30,40];
// let array2 = array;

// array2[array2.length] = 50;

// console.log(array2, array);

// array
// let array = [10,20,30,40];
// let array2 = [...array, 10, 50];

// let object = {
//     firstName: "deepak",
//     lastName: "singh"
// }

// let object2 = {};

// for (const key in object) {
//    object2[key] = object[key]
// }

// console.log(object);
// console.log(object2);

// console.log(object === object2);

// let object2 = Object.assign({}, object)

// console.log(object);
// console.log(object2);

// console.log(object === object2);

// structured clone

// let object2 = structuredClone(object);

// let object = {
//     firstName: "deepak",
//     lastName: "singh"
// }

// let object2 = {...object, age: 10}

// console.log(object);

// console.log(object2);

// console.log(object === object2);



// console.log(array, array2);

/**
 * Variable scope 
 *  
 * 
 * Nested functions
 * 
 * Lexical Environment
 * 
 */

// function testing() {

//     let a = 10;

//     function t() {
//         console.log(a);
//     }

//     t()
// }

// testing();

/**
 * 
 * The old "var"
 * “var” has no block scope
 * “var” tolerates redeclarations
 * “var” variables can be declared below their use
 * 
 * IIFE
 */

// let firstName = "deep";
// {
//     let firstName = "deepak"
// }

// function test() {
//     var firstName = "deepak"
// }

// console.log(firstName);

// IIFE
// (function() {
//     console.log("function called");
// })();


/**
 * The "new Function" syntax
 * 
 * Closure
 */

// function testing() {
//     let a = 10;
//     let b = 10;

//     return function () {
//         console.log(a , b);
//     }
// }

// let t = testing();

// // console.log(t);
// t();



/**
 * 
 * Scheduling: setTimeout and setInterval
 * 
 * setTimeout
 * Canceling with clearTimeout
 * 
 * setInterval
 * 
 * Nested setTimeout
 */

// setInterval(() => {
//     console.log(Math.random());
// }, 1000)

// setTimeout(() => {
//     console.log("after 5 second");
// }, 5000)

// let interval = setInterval(()=> {
//     console.log("testing");
// }, 1000)

// let timeout = setTimeout(() => {
//     clearInterval(interval)
// }, 5000)

// clearTimeout(timeout)

// setTimeout(() => {
//     console.log("time out 1");

//     setTimeout(() => {
//         console.log("time out 2");

//         setTimeout(() => {
//             console.log("time out 3");
        
//             setTimeout(() => {
//                 console.log("time out 4");
//             }, 1000)
//         }, 1000)

//     }, 1000)

// }, 1000)


/**
 * Decorators and forwarding, call/apply
 * 
 * 
 * Using “func.call” for the context
 * 
 * func.apply
 */

let emp1 = {
    firstName: "deepak",
    lastName: "singh"
}

let emp2 = {
    firstName: "Suraj",
    lastName: "singh"
}

let emp3 = {
    firstName: "Navin",
    lastName: "singh"
}

let object = {
    getFullName: function (age,t) {
        console.log(`${this.firstName} ${this.lastName} ${age} ${t}`);
    }
}

object.getFullName.call(emp1, 10, 20);
// object.getFullName.call(emp2);
// object.getFullName.call(emp3);

object.getFullName.apply(emp1, [10, 20]);
// object.getFullName.apply(emp2);
// object.getFullName.apply(emp3);



/**
 * 
 * Function binding
 * Losing “this”
 * 
 * Solution 1: a wrapper
 * Solution 2: bind
 */

"use strict";
/**
 * 
 * Code structure
 * 
 * Statements
 * Semicolons
 * Comments 
 */

// console.log('statement');

// single line comments

/**
  * multi 
  *  line 
  * comments
  * 
  */


/**
 * 
 * The modern mode, "use strict"
 * 
 * “use strict”
 */

/**
 * 
 * Variables
 * 
 * A variable
 * 
 * let 
 * const 
 * var
 * 
 * Variable naming
 * 
 * The name must contain only letters, digits, or the symbols $ and _.
 * The first character must not be a digit.
 */

// var
// var name = "deepak";
// name = "dafsfasfd"

// console.log(name);

// name = "deepak"

// console.log(name);

// var name = "deepak";
// var name = "deepak1";
// console.log(name);
// var name = "deepak";

// name = "fasfasdf";

// let
// let name = "deepak";
// name = "deepak";

// const
// const pi = 3.14;

// pi = 1.25;

// firstName = "deepak";

// console.log(firstName);

// let firstName = "deepak";

// first_name =

// let a = 10;

// let A = 10;

// let firstName = "deepak";
// let _firstName = "deepak";
// let $firstName = "deepak";
// let .firstName = "deepak"; X
// let !firstName = "deepak"; X

// let 12firstName = "deepak"; X

// let first!name = "deepak"; X
// let first$name = "deepak";
// let first_name = "deepak";
// let first123 = "deepak";

/**
 * Data types
 * 
 * Number
 * BigInt
 * Boolean (logical type)
 * null
 * undefined
 * array
 * String
 * Objects and Symbols
 * 
 */
// number
// let number = 10;
// let number1 = 10.25;
// console.log(number1, typeof number1);

// bigint
// let number = 123456789123456789123456789n;
// let number = BigInt('123456789123456789123456789');
// console.log(number, typeof number);

// boolean
// let bool = true;
// console.log(bool, typeof bool);

// null
// let num = null;

// console.log(num, typeof num);

// undefined
// let num;

// console.log(num, typeof num);

// array
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let array = [10,20,30];

// console.log(array, typeof array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// address = baseAddress + sizeofdatatype * index
//         = 1 + 4 * 0
//         = 1

// string
// let str = "asdfkjl1234567890q34567890,./"
// let str1 = 'asdfkjl1234567890q34567890,./'

// let str = "asdfkjl123456\"7890q34567890,./"
// let str = 'asdfkjl12345\'67890q34567890,./'
// let str = "asdfkjl1234567\\890q34567890,./"

// let str = "deepak";

// str[0] = "w";
// console.log(str , typeof str);

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);

// let array = [10,20];
// array[0] = 50;

// console.log(array);

// object

// let array = [
// 1,
// "deepak",
// "deepak@gmail.com",
// ]

// console.log(array);

// console.log("name: " + array[0])
// console.log("email: " + array[1])

// let obj = {
// email: "deepak@gmail.com",
// name: "deepak",
// }

// console.log(obj.name);
// console.log(obj.email);

// console.log("name: " + obj.name);
// console.log("email: " + obj.email)

// symbol
// let sym = Symbol('id');

// console.log(sym.description);

/**
 * Interaction: alert, prompt, confirm
 * 
 * alert
 * prompt
 * confirm
 */

// alert
// alert("hello world!");

// prompt
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// console.log(age, typeof age);

// confirm
// let result = confirm("are you sure you want to delete this record?");

// console.log(result, typeof result);


// console.log("asfasfd");
// console.dir("fdasdf");
// console.warn("console");
// document.write("hello world!");


/**
 * 
 * Type Conversions
 * 
 * String conversion
 * Numeric Conversion
 * Boolean Conversion
 */

// String conversion

// number
// let number = 10;

// console.log(number, typeof number);

// let str = String(number);

// console.log(str, typeof str);

// boolean
// let bool = true;

// console.log(bool , typeof bool);

// let str = String(bool);

// console.log(str, typeof str);

// numeric conversions
// let str = "10";
// console.log(str, typeof str);

// let num = Number(str);
// console.log(num, typeof num);

// let bool = false;
// console.log(bool, typeof bool);

// let num = Number(bool);
// console.log(num, typeof num);

// boolean conversions
// let number = 1;
// console.log(number, typeof number);

// let bool = Boolean(number)
// console.log(bool, typeof bool);

// let str = "";
// console.log(str, typeof str);

// let bool = Boolean(str);
// console.log(bool, typeof bool);

/**
 * 
 * Basic operators
 * 
 * Terms: “unary”, “binary”, “operand”
 * 
 * Arithmetic operators
 * Addition +,
 * Subtraction -,
 * Multiplication *,
 * Division /,
 * Remainder %,
 * Exponentiation **
 * 
 * String concatenation with binary +
 * 
 * Numeric conversion, unary +
 * 
 * Operator precedence
 * 
 * Increment/decrement
 * ++
 * --
 * 
 * Assignment Operators
 * =	
 * +=	
 * -=	
 * *=	
 * /=	
 * %=	
 * **=
 * 
 * Bitwise operators
 * AND ( & )
 * OR ( | )
 * XOR ( ^ )
 * NOT ( ~ )
 * LEFT SHIFT ( << )
 * RIGHT SHIFT ( >> )
 * ZERO-FILL RIGHT SHIFT ( >>> ) 
 * 
 * Comma ,
 * 
 * Comparison Operators
 * ==	equal to
 * ===	equal value and equal type
 * !=	not equal
 * !==	not equal value or not equal type
 * >	greater than
 * <	less than
 * >=	greater than or equal to
 * <=	less than or equal to
 * ?	ternary operator
 * 
 * Logical operators
 * || (OR)
 * && (AND)
 * ! (NOT)
 * 
 */

// * Arithmetic operators
// * Addition +,
// let a = 10;
// let b = 20;

// let c = a + b;
// console.log(c);

// * Subtraction -,
// let a = 10;
// let b = 20;

// let c = a - b;
// console.log(c);

// * Multiplication *,
// let a = 10;
// let b = 20;

// let c = a * b;
// console.log(c);

// * Division /,
// let a = 22;
// let b = 10;

// let c = a / b;
// console.log(c);

// * Remainder %,
// let a = 22;
// let b = 10;

// let c = a % b;
// console.log(c);

// * Exponentiation **
// let a = 6;
// let b = 3;

// let c = a ** b;
// console.log(c);

// string concatination

// let firstName = 'John';
// let lastName = 'doe';

// console.log(firstName + " " + lastName);

// console.log(10 + "10");
// console.log(10 - "10");
// console.log(10 * "10");
// console.log(10 / "10");
// console.log(10 % "10");
// console.log(10 ** "10");

// NAN
// console.log("10" - "10");
// console.log(10 * "abc");
// console.log(10 / "abc");
// console.log(10 % "abc");
// console.log(10 ** "abc");

// unary +
// let number = +"10";
// number = +number;

// console.log(number , typeof number);

// Operator precedence BO DM AS

// console.log(10 + 30 - 10 * 10 * (40 + 50));

// Increment / decrement

// Increment

// let a = 10;
// let b = 10;

// prefix
// console.log(++a); // increment + 1 then output

// postfix
// console.log(b++); // output then increment
// console.log(b);

// let a = 10;

// console.log(a + ++a + a++ - a + ++a );

// decrement

// let a = 10;

// a = a - 1;
// a--;

// console.log(a);

// prefix
// console.log(--a);

// postfix
// console.log(a--);
// console.log(a);

// a = 10;

// console.log(--a + ++a - a + a++ + a--);

// * Assignment Operators
// * =

// let a = 10;

// * +=
// let a = 10;

// let b = 20;

// a += b; //a = a + b;

// console.log(a);

// * -=
// let a = 10;

// let b = 20;

// a -= b; //a = a - b;

// console.log(a);


// * *=
// let a = 10;

// let b = 20;

// a *= b; //a = a * b;

// console.log(a);


// * /=
// let a = 10;

// let b = 20;

// a /= b; //a = a / b;

// console.log(a);

// * %=
// let a = 10;

// let b = 20;

// a %= b; //a = a % b;

// console.log(a);

// * **=
// let a = 2;

// let b = 3;

// a **= b; //a = a ** b;

// console.log(a);

// * Comparison Operators
// * ==	equal to
// let a = "10";
// let b = 10;

// console.log(a == b);

// * ===	equal value and equal type
// let a = 10;
// let b = 10;

// console.log(a === b);

// * !=	not equal
// let a = "10";
// let b = 10;

// console.log(a != b);

// * !==	not equal value or not equal type
// let a = "10";
// let b = 10;

// console.log(a !== b);

// * >	greater than
// let a = 10;

// let b = 10;

// console.log(a > b);

// * <	less than
// let a = 9;

// let b = 10;

// console.log(a < b);

// * >=	greater than or equal to
// let a = 9;

// let b = 10;

// console.log(a >= b);

// * <=	less than or equal to
// let a = 11;

// let b = 10;

// console.log(a <= b);

// * ?	ternary operator

// let a = 11;

// let result = a % 2 === 0 ? 'Even' : 'Odd';

// console.log(result);

// * Logical operators
// * && (AND)
/**
 * let a = 11;
 * let b = 11;
 * 
 * a === 10 && b === 10  result 
 * true        true      true 
 * false       true      false
 * true        false     false
 * false       false     false
 * 
 */

// let a = 11;
// let b = 11;

// console.log(a === 10 && b === 10);

// * || (OR)
/**
 * let a = 11;
 * let b = 11;
 * 
 * a === 10 || b === 10  result 
 * true        true      true
 * false       true      true
 * true        false     true
 * false       false     false
 * 
 */

// let a = 11;
// let b = 11;

// console.log(a === 10 || b === 10);

// * ! (NOT)
/**
 * let a = true
 * 
 * !a = false 
 * 
 */

// let a = 0;
// console.log(!a);

// * Bitwise operators
// * AND ( & )
// let a = 128; // 1010
// let b = 56; // 0101
// 0000

// console.log(a & b);

// 10000000
// 00111000

// * OR ( | )
// let a = 10; // 1010
// let b = 5;  // 0101
// 1111
// let a = 124;
// let b = 72;

// console.log(a | b);

// * XOR ( ^ )
// let a = 65; // 10000001
// let b = 64; // 10000000
// console.log(a ^ b);

// * NOT ( ~ )
// let a = -10;
// console.log(~a);

// * LEFT SHIFT ( << )
// let a = 10; // 10100

// console.log(a << 1);

// * RIGHT SHIFT ( >> )
// let a = 10; // 1

// console.log(a >> 3);

// * ZERO-FILL RIGHT SHIFT ( >>> )
// let a = -10;

// console.log(a >>> 1);


/**
 * 
 * Conditional branching
 * 
 * The “if” statement
 * The “else” clause
 * Several conditions: “else if”
 * Conditional operator ‘?’
 * 
 */

// if

// syntax
// if (condition) {

// }

// let number = 11;

// if(number % 2 === 0) {
// console.log("number is divisible by 2");
// }

// else

// if (condition) {

// } else {

// }
// let number = 12;

// if(number % 2 === 0) {
// console.log("number is divisible by 2");
// } else {
// console.log("number is not divisible by 2");
// }

// if else ladder
// syntax
// if(condition) {

// } else if(condition) {

// } else if (condition) {

// } else {

// }

// number 2 and 5 divisible

// let number = 7;

// if(number % 2 === 0 && number % 5 === 0) {
//     console.log("number is divisible by 5 and 2");
// } else if(number % 5  === 0) {
//     console.log("number is divisible by 5");
// } else if(number % 2 === 0) {
//     console.log("number is divisible by 2");
// } else {
//     console.log("number is neither divisible by 2 nor 5");
// }

// nested if else
// let number = 0;

// if (number > 0) {
//     if (number % 2 === 0) {
//         console.log("number is even");
//     } else {
//         console.log("number is odd");
//     }

// } else {
//     console.log("number is not greater then 0");
// }

// removing curly brackets
// let number = 11;

// if (number % 2 === 0)
//     console.log("number is even");
// else
//     console.log("number is odd");

// ternary operator
// number % 2 === 0 ?
// console.log("number is even") :
// console.log("number is odd");

/**
 * 
 * The "switch" statement
 * Grouping of “case”
 * 
 */

// let a = 10;
// let b = 10;
// let operator = "/";

// if (operator === "+") {
//     console.log(a + b);
// } else if (operator === "-") {
//     console.log(a - b);
// } else if (operator === "*") {
//     console.log(a * b);
// } else if (operator === "/") {
//     console.log(a / b);
// } else {
//     console.log("please enter the valid operator");
// }

// let a = 10;

// switch (a) {
//     case 10:
//         console.log("a : " + a);
//         break;

//     case 11:
//         console.log("a : " + a);
//         break;
//     default:
//         console.log("no case setisfiy");
// }

// let a = 10;
// let b = 10;
// let operator = "%";

// switch (operator) {
// case "+":
//       console.log(a + b);
//     break;

// case "-":
//       console.log(a - b);
//       break;

// case "*":
//       console.log(a * b);
//       break;

// case "/":
//       console.log(a / b);
//       break;

// default:
//       console.log("please enter the valid operator");
// }


/**
 * 
 * Nullish coalescing operator '??'
 * 
 */
// let price = 10;

// if (price) {
//     console.log(price);
// } else {
//     console.log(0);
// }

// console.log(price ? price : 0);

// console.log(price ?? 0);

/**
 * 
 * Loops: while and for
 * 
 * The “while” loop
 * The “do…while” loop
 * The “for” loop
 * The “for in” loop
 * The “for of” loop
 * Breaking the loop
 * Continue to the next iteration
 */

// The “for” loop
// for (initialization;condition ; updation) {

// }

// number 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// array
// let array = [10,20,30,40];

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// string
// let str = "deepak";

// for (let index = 0; index < str.length; index++) {
//     console.log(str[index]);
// }

// let number = 2;

// for (let i = 1; i <= 10; i++) {
//     document.write(number +" X " + i + " = " + ( number * i ))
//     document.write("<br>")
// }

// for in
// array
// let array = [10, 20, 30, 40];

// for (const index in array) {
//     console.log(array[index]);
// }

// string
// let firstName = "deepak";

// for (const index in firstName) {
// console.log(index, firstName[index]);
// }

// object
// let obj = {
// firstName: "deepak",
// lastName: "singh"
// }

// for (const key in obj) {
//     console.log(obj[key]);
// }

// for of

// let array = [10, 20, 30, 40];

// for (const value of array) {
//     console.log(value);
// }

// let firstName = "deepak";

// for (const value of firstName) {
// console.log(value);
// }

// while
// syntax
// while (condition) {

// }

// print 1 to 10
// let number = 1;

// while (number <= 10) {
// console.log(number);
// number++;
// }

// print all values of array
// let array = [10,20,30,40];

// let index = 0;

// while(index < array.length) {

// console.log(array[index]);

// index++;
// }

// print all the characters of string
// let string = "Deepak";

// let index = 0;

// while(index < string.length) {
// console.log(string[index]);

// index++;
// }

// let index = 0;

// for (; index < string.length;) {
// console.log(string[index]);
// index++
// }

// do while

// do {

// } while (condition);

// let number = 10;

// do {
// console.log(number);
// number--;
// } while (number >= 9);

// print 1 to 10;
// let number = 0;

// do {
// console.log(number);
// number++;
// } while (number <= 10 && number > 0);

// print all values of array

// let array = [10,20,30,40,50];

// let index = 0;

// do {
// console.log(array[index]);
// index++;

// } while ( index < array.length );

// print all characters of string
// let string = "deepak";

// let index = 0;

// do {
//     console.log(string[index]);
//     index++;
// } while (index < string.length);

// breaking the loop
// let array = [
//     10,20,30,40,50
// ];

// for (let index = 0; index < array.length; index++) {

//     if (array[index] === 30)
//         break;
//     console.log(array[index]);
// }

// skipping the value in a loop
// let array = [
//     10,20,30,40,50
// ];

// for (let index = 0; index < array.length; index++) {

//     if (array[index] === 30 || array[index] === 40)
//         continue;
//     console.log(array[index]);
// }

// for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//       // document.write(row + " " + col);
//       // document.write("<br>")
//         if(row >= col)
//         document.write("*")
//     }

//     document.write("<br>")
// }

// 153 = 1**3 + 5**3 + 3**3
// let number = 153;
// let sum = 0;

// while(number != 0) {
//    let rem = number % 10;

//    sum = sum + rem**3;

//    number = parseInt(number / 10) ;
// }

// console.log(sum);


// find total digit in a number
// reverse a number
// check the number if it is palindrome or not
// check the number if it is armstrong or not
// check the number if it is perfect square number or not
// check the number if it is perfect cube number or not


/**
 * 
 * Functions
 * 
 * Function Declaration
 * Local variables
 * Outer variables
 * Parameters
 * Default values
 * Returning a value
 * Function expressions
 * Callback functions
 * Arrow functions
 * 
 */

// let a = 10;
// let b = 10;
// console.log(a + b);

// a = 20;
// b = 20;
// console.log(a + b);


// a = 30;
// b = 30;
// console.log(a + b);

// function declarations and definitions
// function addition() {
//     let a = 30;
//     let b = 30;
//     console.log(a + b);
// }

// call
// addition();

// parameters and arguments

// num1 and num2 are function parameters
// function addition(num1, num2) {
//     console.log(num1 + num2);
// }

// function arguments
// addition(10,20)
// addition(20,20)

// function addition(num1,num2) {
// console.log(num1 + num2);
// }

// addition(10,20,30)


// function addition(num1,num2,num3) {
// console.log(num3);
// console.log(num1 + num2);
// }

// addition(10,20)

// * Local variables

// num1, num2 local variables
// function addition(num1,num2) {
// console.log(num1 + num2);
// }

// addition(10,20)
// console.log(num2);

// * Outer variables
// let sum = 0 // global variable
// function addition(num1, num2) {
//     sum = num1 + num2;
// }

// console.log(sum);

// addition(10, 20)

// console.log(sum);

// function test() {
//     let a = 10; // outer variable

//     function t() {
//         console.log(a);
//     }

//     t();
// }

// test()

// let
// let a = 10;

// {
// let b = 10;

// var c = 10;
// }

// function test() {
// var d = 10;
// }

// console.log(a,c,d);

// default values
// function addition(num1,num2,num3 = 0) {
// console.log(num1 + num2 + num3);
// }

// addition(10,20,30)

// returning a value from a function
// function addition(num1,num2) {
// return num1 + num2;
// }

// let sum = addition(10,20)
// console.log(sum);

// function expression
// let addition = function(num1,num2) {
// console.log(num1 + num2);
// }

// addition(10,20)

// arrow function
// let variableName = () => {
// }

// let addition = (num1,num2) => {
// console.log(num1 + num2);
// }

// addition(10,20)

// remove curly brackets only when if there will one statement
// let addition = (num1, num2) => num1 + num2;
// let sum = addition(10, 20)
// console.log(sum);

// remove prentesis function if there will be only one parameter
// let squareOfNumber = num => num * num;
// console.log(squareOfNumber(10));

// callback function

// function calculate(a,b, operator) {
// if(operator === "+")
//     console.log(a + b);
// else if(operator === "-")
//     console.log(a - b);
// else if(operator === "*")
//     console.log(a * b);
// else if(operator === "/")
//     console.log(a / b);
// else if(operator === "%")
//     console.log(a % b);
// else if(operator === "**")
//     console.log(a ** b);
// else
//     console.log("please enter the valid operator");
// }

// calculate(10, 10 , "**")

// function calculate(a, b, cb) {
//     cb(a, b)
// }

// calculate(10, 10, function (a, b) {
//     console.log(a + b);
// })

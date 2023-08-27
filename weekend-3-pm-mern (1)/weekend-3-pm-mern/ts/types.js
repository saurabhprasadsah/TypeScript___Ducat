// ### Types
// - string
// let string: string = "deepak"
// console.log(string);
// - number
// let number: number = 10;
// console.log(number);
// - boolean
// let boolean: boolean = true;
// console.log(boolean);
// - Arrays
// let nums : number[] = [10,20,30]
// let str : string[] = ['deepak', 'suraj', 'navin']
// console.log(nums, str);
// - any
// let a: any = 10;
// a = "deepak";
// a = true;
// console.log(a);
// - Functions
// function addition(num1: number, num2: number) {
//     console.log(num1 +  num2);
// }
// function addition(num1: number, num2: number) : number {
//     return num1 +  num2;
// }
// let sum : number = addition(40,20)
// console.log(sum);
// - Object
// interface Employee {
//     firstName: string,
//     lastName: string,
//     age: number
// }
// let object : {
//     firstName: string,
//     lastName: string,
//     age: number
// } = {
//     firstName: "deepak",
//     lastName: "singh",
//     age: 10
// }
// let object2 : Employee = {
//     firstName: "deepak",
//     lastName: "singh",
//     age: 10
// }
// console.log(object, object2);
// - Interfaces
// - Optional Properties
// interface Employee {
//     firstName: string,
//     lastName: string,
//     age?: number
// }
// let object1 : Employee = {
//     firstName: "deepak",
//     lastName: "singh",
// }
// let object2 : Employee = {
//     firstName: "deepak",
//     lastName: "singh",
//     age: 10
// }
// console.log(object1, object2);
// - null
// let number: null = null;
// console.log(number);
// - undefined
// let number: undefined;
// console.log(number);
// - Enums
// enum OrderStatus {
//     processing = 10,
//     pending = 11,
//     delivered = 12,
//     canceled = 13
// }
// console.log(OrderStatus.processing);
// - bigint
// let number: bigint = 11111111111111111111111111111111111111n;
// console.log(number);
// - symbol
// let sym: symbol = Symbol('id');
// console.log(sym.description);
// - Union
// let a: number | string | boolean = true
// console.log(a);
// - Intersection
// interface College {
//     collegeName: string;
// }
// interface Sports {
//     sportsName: string;
// }
// let student: College & Sports = {
//     collegeName: "DUCAT",
//     sportsName: "cricket"
// }
// - Type Aliases
// type deepak = string | number;
// let firstName: deepak = 10;
// console.log(firstName);
// - Tuple Types
// let array: [string|number,string, number, boolean] = 
//     [10, "singh", 10, true]
// console.log(array);
// - Type Assertions
let root = document.getElementById('heading');

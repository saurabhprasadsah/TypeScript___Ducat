// ### Objects
// - Optional Properties
// interface Employee {
//     firstName: string;
//     lastName: string;
//     age?: number;
// }

// let emp: Employee = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 10
// }

// let emp1 : Employee = {
//     firstName: "test",
//     lastName: "test"
// }

// console.log(emp);


// - readonly Properties
// interface Employee {
//     readonly firstName: string;
//     lastName: string;
//     age?: number;
// }

// let emp: Employee = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 10
// }

// console.log(emp.firstName);
// emp.firstName = "testing"

// - Index Signatures
interface Test {
    [index: string]: string;
}

let emp: Test = {
    ["deepak"]: "deepak"
}

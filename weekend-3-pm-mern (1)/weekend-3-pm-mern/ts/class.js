// ### Class
// - Constructors
// - Methods
// - Member Visibility ( public / private/ protected / readonly)
// - Getters / Setters
// - extends
// - Super Calls
// - Overriding Methods
// - Static Members
// - abstract Classes and Members
// - implements (interface)
// - Generic Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// constructor
// class Employee {
//     firstName: string;
//     lastName: string;
//     constructor(firstName: string, lastName: string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let employee: Employee = new Employee("deepak", "singh");
// console.log(employee);
// Methods
// class Employee {
//     // properties
//     firstName: string = "deepak";
//     lastName: string = "singh";
//     // Method
//     getFullName(): string {
//         return this.firstName + " " + this.lastName
//     }
// }
// let employee: Employee = new Employee()
// console.log(employee.getFullName());
// - Member Visibility ( public / private/ protected / readonly)
// class Employee {
//     // public properties
//     public firstName: string = "deepak";
//     public lastName: string = "singh";
//     // private property
//     private salary: number = 20000;
//     // private method
//     private getSalary(): number {
//         return this.salary
//     }
//     // public method
//     public getSalaryPublic(): number {
//         return this.getSalary();
//     }
// }
// let employee: Employee = new Employee()
// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee.getSalaryPublic());
// class Employee {
//     // private property
//     protected salary: number = 20000;
//     // private method
//     protected getSalary(): number {
//         return this.salary
//     }
// }
// class Employee1 extends Employee {
//     getSalaryPublic(): number {
//         return this.salary;
//     }
// }
// let employee1: Employee1 = new Employee1()
// console.log(employee1.salary); X
// class Test {
//    readonly className: string = 'Test';
// }
// let t: Test = new Test();
// t.className = "testing"
// console.log(t);
// console.log(t.className);
// Getters / Setters
// class Employee {
//     private salary : number = 20000;
//     // getter
//     get getSalary(): number {
//         return this.salary;
//     }
//     // setter
//     set setSalary(value:number) {
//         this.salary = value;
//     }
// }
// let employee: Employee = new Employee()
// employee.setSalary = 25000;
// console.log(employee.getSalary);
// Super Calls
// class ParentClass {
//     className : string;
//     // constructor(name : string) {
//     //     this.className = name;
//     // }
//     constructor() {
//     }
// }
// class ChildClass extends ParentClass {
//     testing : string;
//     // constructor(test: string, name : string) {
//     //     super(name)
//     //     this.testing = test;
//     // }
//     constructor(test: string, name : string) {
//         super()
//         this.testing = test;
//     }
// }
// let child: ChildClass = new ChildClass("testing", "deepak")
// console.log(child);
// method overloading
// class Calculator {
//     // area of circle
//     public area(radius: number) {
//         return Math.PI * radius * radius;
//     }
//     // area of rectangle
//     public area(length: number, breadth: number) {
//         return length * breadth;
//     }
// }
// method overridding
// class ParentClass {
//     public getParentName(): string {
//         return "ParentClass";
//     }
// }
// class ChildClass extends ParentClass {
//     public getParentName(): string {
//         console.log(super.getParentName());
//         return "childClass";
//     }
// }
// let child: ChildClass = new ChildClass()
// console.log(child.getParentName());
// Static Members
// class Test {
//    static className: string = "Test";
//    static getClassName(): string {
//     return this.className
//    }
// }
// console.log(Test.className);
// console.log(Test.getClassName());
// class Test1 extends Test{
// }
// console.log(Test1.className);
// console.log(Test1.getClassName());
// - abstract Classes and Members
var ParentClass = /** @class */ (function () {
    function ParentClass() {
        this.firstName = "first";
    }
    ParentClass.prototype.getFirstName = function () {
        return this.firstName;
    };
    return ParentClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = "Test";
        return _this;
    }
    return ChildClass;
}(ParentClass));
// let ch = new ChildClass()
// console.log(ch);
// - implements (interface)
// interface Car {
//    wheels: number;
//    hasFourWheels(): boolean;
//    getBrandName(): string;
// }
// class Maruti implements Car {
//    wheels: number = 4;
//    hasFourWheels(): boolean {
//       return true
//    }
//    getBrandName(): string {
//       return "Maruti"
//    }
// }
// - Generic Classes

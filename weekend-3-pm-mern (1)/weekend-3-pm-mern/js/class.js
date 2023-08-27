/**
 * 
 * Class basic syntax
 * 
 * The “class” syntax
 * 
 * What is a class?
 * 
 * Class Expression
 * 
 * Getters/setters
 * 
 * Computed names […]
 * 
 * Class fields
 * 
 * Making bound methods with class fields
 */

// how to create class
// class Employee {
//     firstName = "deepak"

//     getFirstName() {
//         console.log("get first name");
//     }
// }

// how to create object of class
// let emp = new Employee();

// console.log(emp);

// access properties and methods

// console.log(emp.firstName);

// emp.getFirstName()

// Class Expression
// let Employee = class {
//     firstName = "deepak"

//     getFirstName() {
//         console.log("get first name");
//     }
// }

// let emp = new Employee();

// console.log(emp);

// this
// class Employee {
//     firstName = "deepak"

//     getFirstName() {
//        return this.firstName;
//     }
// }

// let emp = new Employee();

// console.log(emp.getFirstName());

// constructor

// class Employee {
//     firstName = "deepak"

//     constructor(name) {
//         console.log("constructor called", name);
//         this.firstName = name;
//     }

//     getFirstName() {
//        return this.firstName;
//     }
// }

// let emp = new Employee("fasdfasdfasdf");

// console.log(emp.getFirstName());

// Getters/setters
// class Employee {
//     firstName = "deepak"

//     get getfirstname() {
//         return this.firstName
//     }

//     set setfirstname(value) {
//         this.firstName = value;
//     }
// }

// let emp = new Employee;

// // set value
// emp.setfirstname = "Jhon"

// // get  value
// console.log(emp.getfirstname);

// Computed names […]
// class Employee {
//     ['first' +  'name'] = "deepak"
//     constructor(dummyname, value) {
//         this[dummyname] = value
//     }

//     ['get' +  'first' + 'name'] () {
//         return this.firstname;
//     }
// }

// let emp = new Employee('testing', 'testing')

// console.log(emp.getfirstname());


/**
 * Class inheritance
 * 
 * The “extends” keyword
 * 
 * Overriding a method
 * 
 * Overriding constructor
//  */
// class ParentClass {
//     className = "ParentClass"

//     getClassName() {
//         return this.className;
//     }
// }

// class ChildClass extends ParentClass {
//     childClassName = "childclass"
//     className = "childclass"

//     getChildClassName() {
//         return this.childClassName;
//     }

//     getClassName(name) {
//         return this.className +  "childclass" +  " " + name;
//     }

//     testing() {
//         console.log("no parameter");
//     }

//     testing(a) {
//         console.log("one parameter");
//     }

//     testing(a, b) {
//         console.log("two parameter");
//     }
// }

// let childclass = new ChildClass();

// console.log(childclass);
// console.log(childclass.className);
// console.log(childclass.getClassName("fasfasdf"));

// childclass.testing()

// console.log(childclass.childClassName);
// console.log(childclass.getChildClassName());


/**
 * Static properties and methods
 * 
 * Static properties
 * 
 * Inheritance of static properties and methods
 */

// class Employee {
//     static counter = 0
//     firstName = "deepak"

//     constructor(name) {
//         this.firstName = name;
//         Employee.counter++;
//     }

//     getFirstName() {
//        return this.firstName;
//     }

//     static getCounterValue() {
//         return this.counter;
//     }
// }

// let emp1 = new Employee("Fsadfdasf")

// console.log(emp1);

// let emp2 = new Employee("Fsadfdasf")

// console.log(emp2);

// console.log(Employee.getCounterValue());

// class ParentClass {
//     static className = "parentclass"

//     static getClassName() {
//         return this.className
//     }
// }

// class ChildClass extends ParentClass {
//     static className = "fdghjkclass"

// }

// console.log(ChildClass.className);

// console.log(ChildClass.getClassName());

/**
 * 
 * Private and protected properties and methods
 * 
 * Private
 * 
//  */

// class Test {
//     // public property
//     className = "testing"

//     // private property
//     #privateProp = "Car";

//     // public method
//     getClassName() {
//         console.log("get class name called");
//     }

//     // private method
//     #getPrivateProp() {
//         return this.#privateProp
//     }

//     get privateProp() {
//         return this.#getPrivateProp()
//     }
// }

// let t = new Test()

// console.log(t.privateProp);

// class A {
//     #a = 10;

//     #getAfunc() {
//         console.log("get a func");
//     }
// }

// class B extends A {

//     getA() {
//         this.#getAfunc()
//         return this.#a;
//     }
// }

// let b = new B()

// console.log(b);


/**
 * 
 * Class checking: "instanceof"
 * 
 * The instanceof operator
 */


// class A {}

// class B {}

// let a = new A;
// let b = new B;

// console.log(b instanceof A);

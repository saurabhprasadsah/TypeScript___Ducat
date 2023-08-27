// let array = [];

// console.log(array);

// let str = "string"

// console.log(str.__proto__);

// let number = 10;

// console.log(number.__proto__);

// let number = undefined;

// console.log(number.__proto__);

// let number = null

// console.log(number.__proto__);

// let object = {}

// console.log(object);

// let sym = Symbol('id')

// console.log(sym.__proto__.__proto__);

Array.prototype.deepak = function() {
    console.log("deepak");
}

Array.prototype.size = 10;

let array = [];

console.log(array.deepak());
console.log(array.size);

class Test{

}

Test.prototype.testing = function() {
    console.log("testing");
}

let t = new Test()

console.log(t.testing());
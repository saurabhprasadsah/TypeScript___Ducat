/**
 * Property flags and descriptors
 * 
 * Property flags
 * writable – if true, the value can be changed, otherwise it’s read-only.
 * enumerable – if true, then listed in loops, otherwise not listed.
 * configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
 * 
 * Non-writable
 * 
 * Non-enumerable
 * 
 * Non-configurable
 * 
 * Object.defineProperty
 * 
 * Object.getOwnPropertyDescriptors
 * 
 * Sealing an object globally
 * Object.preventExtensions(obj)
 * Object.seal(obj)
 * Object.freeze(obj)
 * Object.isExtensible(obj)
 * Object.isSealed(obj)
 * Object.isFrozen(obj)
 * 
 */

// let object = {
//     firstName: "deepak"
// }

// // let descriptors = Object.getOwnPropertyDescriptors(object , 'firstName');

// // console.log(descriptors);


// writable

// Object.defineProperty(object, 'firstName', {
//     writable: false
// })

// let descriptors = Object.getOwnPropertyDescriptors(object , 'firstName');

// console.log(descriptors);

// object.firstName = "Jhon"

// console.log(object);

// configurable

// let object = {
//     firstName: "deepak"
// }

// let descriptors = Object.getOwnPropertyDescriptors(object , 'firstName');

// console.log(descriptors);

// Object.defineProperty(object, 'firstName', {
//     configurable: false
// })

// let descriptors = Object.getOwnPropertyDescriptors(object , 'firstName');

// console.log(descriptors);

// delete object.firstName;

// console.log(object);

// enumerable

// let object = {
//     firstName: "deepak",
//     age: 10
// }

// let descriptors = Object.getOwnPropertyDescriptors(object , 'firstName');

// console.log(descriptors);

// Object.defineProperty(object, 'firstName', {
//     enumerable: false
// })

// for (const key in object) {
//     console.log(key , object[key]);
// }




/**
 * 
 * Property getters and setters
 * 
 * Getters and setters
 * 
 * Accessor descriptors
 * get – a function without arguments, that works when a property is read,
 * set – a function with one argument, that is called when the property is set,
 * enumerable – same as for data properties,
 * configurable – same as for data properties.
 * 
 * Smarter getters/setters
 */

// getter
// let object = {
//     firstName : "deepak",
//     getFirstName: function( ) {
//         return this.firstName;
//     },

//     get getfirstname() {
//         return this.firstName;
//     }
// }

// // . []
// console.log(object.firstName);

// // method
// console.log(object.getFirstName());

// // get
// console.log(object.getfirstname);

// setter
let object = {
    firstName : "deepak",
    setFirstName: function(value) {
        this.firstName = value;
    },
    set setfirstname(value) {
        this.firstName = value
    }
}

// .
// object.firstName = "Jhon"

// method
// object.setFirstName("Jhon")

// set
// object.setfirstname = "Jhon"

// console.log(object);

// let counter = 0
// setInterval(() => {
//     console.log(counter);
//     counter++
// }, 1000)
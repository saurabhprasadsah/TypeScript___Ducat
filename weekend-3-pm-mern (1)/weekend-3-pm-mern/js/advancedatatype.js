/**
 * 
 * Numbers
 * 
 * Hex, binary and octal numbers
 * toString(base)
 * Rounding
 * Math.floor
 * Math.ceil
 * Math.round
 * Math.trunc
 * Math.toFixed
 * Imprecise calculations
 * Tests: isFinite and isNaN
 * Math.random()
 * Math.pow(n, power)
 * Math.max(a, b, c...) and Math.min(a, b, c...)
 * parseInt and parseFloat
 */
// Hex, binary and octal
// let number = 10;

// console.log(number.toString(2));
// console.log(number.toString(8));
// console.log(number.toString(16));

// * Rounding
// let number = 10.5;

// * Math.floor
// console.log(Math.floor(number));

// * Math.ceil
// console.log(Math.ceil(number));

// * Math.round
// console.log(Math.round(number));

// * Math.trunc
// console.log(Math.trunc(number));

// toFixed
// let number = 10.252525;
// console.log(number.toFixed(2));

// Imprecise calculations
// console.log(10 +  20 - 10 + false +  true + 90);

// isFinite and isNaN
// let number = "deepak";

// console.log(isFinite(number));

// let test = 10;

// console.log(isNaN(test));

// Math.random()
// console.log(Math.floor(Math.random() *1000));

// * Math.pow(n, power)
// console.log(Math.pow(2, 3));

// * Math.max(a, b, c...) and Math.min(a, b, c...)
// console.log(Math.max(10,50,20));
// console.log(Math.min(10,50,20));

// * parseInt and parseFloat
// let number = "10.25";

// console.log(parseInt(number));

// console.log(parseFloat(number));


/**
 * Strings
 * 
 * Quotes
 * Special characters
 * String length
 * Accessing characters
 * Strings are immutable
 * 
 * Changing the case
 * toUpperCase
 * toLowerCase
 * 
 * Searching for a 
 * indexOf
 * lastIndexOf
 * 
 * includes, startsWith, endsWith
 * 
 * Getting a substring
 * slice
 * substring
 * substr
 * 
 * Comparing strings
 * codePointAt
 * fromCodePoint
 * 
 */

// let fullName = "deepak singh gusain";

// let str = `
//     asfasdf
//     fasf
//     dfsaf
//     asdfasfd
//     asfafs
//     ${ Math.random() }

//     ${fullName}
//     dasdf
//     asfd
//     asfasdf
// `;

// console.log(str);

// let firstName = "deepak";
// let secondName = "deepak";

// let str1 = `${firstName} ${secondName}`

// console.log(str1);

// let fullName = "deepak singh";

// console.log(fullName.length);

// console.log(fullName[0]);

// fullName[0] = "w";

// console.log(fullName);

// let array = [10];

// array[0] = 20;

// console.log(array);

// * Changing the case
// let name = "DEEPAK";

// * toUpperCase
// console.log(name.toUpperCase());

// * toLowerCase
// console.log(name.toLowerCase());

// includes, startsWith, endsWith
// let str = "deepak singh gusain";

// console.log(str.includes("ak"));

// console.log(str.startsWith('d'));

// console.log(str.endsWith('in'));

// * Searching for a
// let str = "deepak singh gusain";
// * indexOf
// console.log(str.indexOf('de'));

// * lastIndexOf
// console.log(str.lastIndexOf('a'));

// * Getting a substring
// * slice
// let str = "deepak singh gusain";

// console.log(str.slice(7, 13));

// * substring
// let str = "deepak singh gusain";

// console.log(str.substring(0, 140));

// * substr
// let str = "deepak singh gusain";
// console.log(str.substr(0, -6));

// * Comparing strings
// * codePointAt
// let str = "deepak singh gusain";
// for (const character of str) {
//     console.log(character, character.codePointAt());
// }

// console.log(str.codePointAt());

// * fromCodePoint
// console.log(String.fromCodePoint(68,69,69,80,65,75, 32, 83));

/**
 * 
 * Arrays
 * 
 * Declaration
 * Methods pop/push, shift/unshift
 * new Array()
 * Multidimensional arrays
 * toString
 * 
 * Array methods
 * 
 * Add/remove items
 * arr.push(...items) – adds items to the end,
 * arr.pop() – extracts an item from the end,
 * arr.shift() – extracts an item from the beginning,
 * arr.unshift(...items) – adds items to the beginning.
 * 
 * splice
 * 
 * slice
 * 
 * concat
 * 
 * Iterate: forEach
 * 
 * Searching in array
 * indexOf/lastIndexOf and includes
 * find and findIndex/findLastIndex
 * filter
 * 
 * Transform an array
 * map
 * sort(fn)
 * reverse
 * split and join
 * reduce/reduceRight
 * 
 * Array.isArray
 */

// []
// let array = [10,20,30];
// console.log(array);

// new Array
// let array = new Array(10);
// console.log(array);

// Array.of
// let array = Array.of(10);
// console.log(array);

// Array.from
// let array = Array.from([10]);
// console.log(array);

// multidimensional array
// let array = [[10,[70, 80]],[30, 40],[50, 60]];

// console.log(array[0][1]);
// console.log(array[2][0]);

// toString
// let array = [
//     [
//         10,
//         [
//             70, 80
//         ]
//     ],
//     [
//         30, 40
//     ],
//     [
//         50, 60
//     ]
// ];

// array = [10,70,80,30,40,50,60];

// console.log(array.toString());


// * Add/remove items

// * arr.push(...items) – adds items to the end,
// let array = [10,20,30,40];

// let result = array.push(50,20,50,70, true)

// console.log(array, result);

// * arr.pop() – extracts an item from the end,
// let array = [10,20,30,40, "fasdfasdf"];

// let result = array.pop();

// console.log(array);

// * arr.shift() – extracts an item from the beginning,
// let array = [10,20,30,40];

// let result = array.shift();

// console.log(array, result);

// * arr.unshift(...items) – adds items to the beginning.
// let array = [10,20,30,40];

// let result = array.unshift(50,40,90);

// console.log(array, result);

// * splice
// remove
// let array = [10,20,30,40]

// let response = array.splice(2,0)

// console.log(array,response);

// update
// let array = [10,20,30,40]

// array.splice(2,0,"fasdfasasfasf", "fasdfasfdasffas")

// console.log(array);

// let array = [10,20,30,40]

// array.splice(-2,1)

// console.log(array);

// * slice

// let array = [10,20,30,40];
// let sliceArray = array.slice(1,3)
// console.log(sliceArray);

// * concat
// let array = [10,20,30,40];
// let array2 = [50,60,70,80];
// let array4 = [50,60,70,80];

// let array3  = array.concat(array2, array4);

// console.log(array3);
// console.log(array2);
// console.log(array);


// * Iterate: forEach
// let array = [10,20,30,40];

// array.forEach((value,index, arr)=> {
//     console.log(value, index, arr);
// })

// * Searching in array
// * indexOf/lastIndexOf and includes
// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 50 , 100];

// console.log(array.indexOf(500));
// console.log(array.lastIndexOf(50));
// console.log(array.includes(500));


// * find and findIndex/findLastIndex

// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 50 , 100];

// let returnValue = array.find((value,index, arr) => {
//     if(value === 50) {
//         return index;
//     }
// })

// returnValue = array.findIndex((value,index, arr) => {
//     if(value === 50) {
//         return index;
//     }
// })

// returnValue = array.findLastIndex((value,index, arr) => {
//     if(value === 50) {
//         return index;
//     }
// })

// console.log(returnValue);

// let array = [
//     {
//         id: 1,
//         name: "deepak"
//     },
//     {
//         id: 2,
//         name: "suraj"
//     },
// ]

// let data = array.find((value) => value.id === 1);

// console.log(data);

// * filter
// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 50 , 100];

// let filterValue = array.filter((value, index, arr) => {
//     if(value > 50) {
//         return value;
//     }
// })

// console.log(filterValue);


// let array = [
//     {
//         id: 1,
//         name: "deepak"
//     },
//     {
//         id: 2,
//         name: "suraj"
//     },
//     {
//         id: 3,
//         name: "deepak"
//     },
// ]

// let data = array.filter((value) => value.name === "deepak");

// console.log(data);

// * Transform an array
// * map
// let array = [10,20,30,40];

// let mapedArray = array.map((value,index,arr) => {
//     return value * 2;
// })

// console.log(mapedArray, array);


// * sort(fn)
// let array = [100,20,50,10,40];

// let sortedArray = array.sort((a, b) => {
//     if (a > b) {
//         return 1
//     }
//     if (a == b) {
//         return 0;
//     }
//     if (a < b) {
//         return -1
//     }
//     // return b - a;
// });

// console.log(sortedArray);


// * reverse
// let array = [100,20,50,10,40];

// console.log(array.reverse());

// * split and join
// let array = [100,20,50,10,40];

// let joinArray = array.join('|');

// let afterSplit = joinArray.split("|");

// console.log(afterSplit.map((value) => {
//     return +value
// }));

// * reduce/reduceRight
// let array = [100,20,50,10,40];

// let sum = array.reduce((acc, currentValue) => {
//     return acc + currentValue;
// })

// console.log(sum);

// * Array.isArray
// let array = [100,20,50,10,40];

// console.log(Array.isArray(array));

/**
 * 
 * Iterables
 * String is iterable
 * Iterables and array-likes
 */

// string
// let name = "deepak";

// for (const value of name) {
//     console.log(value);
// }

// array
// let array = [100,20,50,10,40];

// for (const value of array) {
//     console.log(value);
// }

// object
// let obj = {
//     firstName: "John",
//     age: 10
// }

// for (const value of obj) {
//     console.log(value);
// }

/**
 * 
 * Map and Set
 * 
 * Map
 * new Map() – creates the map.
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the value by the key.
 * map.clear() – removes everything from the map.
 * map.size – returns the current element count.
 * 
 * Iteration over Map
 * map.keys() – returns an iterable for keys,
 * map.values() – returns an iterable for values,
 * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 * 
 * 
 * Set
 * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * set.has(value) – returns true if the value exists in the set, otherwise false.
 * set.clear() – removes everything from the set.
 * set.size – is the elements count.
 * 
 * Iteration over Set
 */

// * Map
// * new Map() – creates the map.
// let map = new Map();

// * map.set(key, value) – stores the value by the key.
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)

// * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// console.log(map.get(5));

// * map.has(key) – returns true if the key exists, false otherwise.
// console.log(map.has(4));

// * map.delete(key) – removes the value by the key.
// map.delete(4)
// console.log(map);

// * map.clear() – removes everything from the map.
// map.clear()
// console.log(map);

// * map.size – returns the current element count.
// console.log(map.size);

// * Iteration over Map
// * map.keys() – returns an iterable for keys,
// console.log(map.keys());

// for (const value of map.keys()) {
//     console.log(value);
// }

// * map.values() – returns an iterable for values,
// console.log(map.values());

// for (const value of map.values()) {
//     console.log(value);
// }

// * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
// console.log(map.entries());

// for (const value of map.entries()) {
//     console.log(value[0] , value[1]);
// }

// * Set
// * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// let set = new Set();

// * set.add(value) – adds a value, returns the set itself.
// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);
// console.log(set);

// * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.delete(10);

// console.log(set);

// * set.has(value) – returns true if the value exists in the set, otherwise false.
// console.log(set.has(50));

// * set.clear() – removes everything from the set.
// set.clear();

// console.log(set);

// * set.size – is the elements count.
// console.log(set.size);

// for (const value of set) {
//     console.log(value);
// }

/**
 * WeakMap and WeakSet
 * 
 * WeakMap
 * weakMap.get(key)
 * weakMap.set(key, value)
 * weakMap.delete(key)
 * weakMap.has(key)
 * 
 * WeakSet
 * 
 */

// let weakMap = new WeakMap();

// let obj = {
//     key: 1
// }

// weakMap.set(obj, 10);

// console.log(weakMap.has(obj));

// weakMap.delete(obj)

// console.log(weakMap.get(obj));

// let weakSet = new WeakSet();
// // console.log(weakSet);

// let obj = {key: 1, value : 10}

// weakSet.add(obj)

// console.log(weakSet.has(obj));

// weakSet.delete(obj)

// console.log(weakSet);

/**
 * 
 * Object.keys, values, entries
 * 
 * Object.keys(obj) – returns an array of keys.
 * Object.values(obj) – returns an array of values.
 * Object.entries(obj) – returns an array of [key, value] pairs.
 */

// let object = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 10,
//     email: 'john@gmail.com'
// }

// console.log(Object.keys(object));
// console.log(Object.values(object));
// console.log(Object.entries(object));


/**
 * Destructuring assignment
 * 
 * 
 * Array destructuring
 * 
 * The rest ‘…’
 * 
 * Default values
 * 
 * Object destructuring
 * 
 * The rest pattern “…”
 * 
 * Nested destructuring
 */

// array

let array = [10,20,30, 40,50,60];

let [a,b,c, ...d] = array;

// function addition(...nums) {
   
//     let sum = 0;

//     for (const value of nums) {
//         sum += value
//     }

//     console.log(sum);
// }

// addition(10,20,50,80,90, 100)

// let array = [10,20];

// let [a,b,c = 0] = array;

// console.log(a,b,c);

// object
// let object = {
//     name: {
//         firstName: "Jhon",
//     },
//     age: 10,
//     firstName: "Jhon",
// }

// let firstName = object.firstName

// let { firstName:fname , age }  = object;

// console.log(fname, age);

// let {name:{firstName:fname}} = object;

// console.log(fname);

// let object = {
//     name: {
//         firstName: "Jhon",
//     },
//     age: 10,
//     firstName: "Jhon",
// }

// let {age, ...newObject } = object;

// console.log(age, newObject);

/***
 * 
 * Date and time
 * 
 * Creation
 * 
 * Access date components
 * getFullYear()
 * getMonth()
 * getDate()
 * getHours()
 * getMinutes() 
 * getSeconds() 
 * getMilliseconds()
 * getDay()
 * 
 * Date.now()
 * 
 * Date.parse from a string
 * 
 */

// let date = new Date();

// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// let now = Date.now()

// console.log(now/1000/60/60/24/365);

// let parse = Date.parse("10-10-2020")

// console.log(parse/1000/60/60/24/365);

/**
 * JSON methods
 * 
 * JSON.stringify
 * 
 * JSON.parse
 */

let object = {
    firstName: 'deepak',
    age: 10
}

// convert normal object to json object
let jsonObject = JSON.stringify(object);

// console.log(jsonObject, typeof jsonObject);

// console.log(jsonObject.firstName);

// convert json object to normal object
let normalObject = JSON.parse(jsonObject);

console.log(normalObject.firstName);
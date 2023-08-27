// function addition(a,b) {
//     return a + b;
// }   

// console.log(addition)

function* addition() {
   yield 10 + 20;
   yield 20 + 30;
}

let add = addition();
console.log(add.next());
console.log(add.next());


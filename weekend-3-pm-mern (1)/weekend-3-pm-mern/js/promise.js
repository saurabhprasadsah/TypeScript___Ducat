// promise created
// let promise = new Promise(function (resolve, reject) {
//     // resolve("resolve")
//     reject("reject")
// })

// // resolved
// promise.then((data)=> {
//     console.log(data);
// });
// // rejected
// promise.catch((error)=> {
//     console.log(error);
// });

// promise chanining
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// let items = ['pen', 'paper']

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         if(items.includes('pens')) {
//             resolve("Item is available in this shop")
//         }else {
//             reject("Item is not available in this shop")
//         }
//     }, 3000)
// })

// console.log(promise);

// promise.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })

// resolved issue of callback hell
// let promise = new Promise(function(resolve, reject){
//     resolve("fasfdasf")
//     // reject("fasfasdf")
// });

// promise.then((data) => {
//     console.log("t 1");
// }).then((data) => {
//     console.log("t 2");
//     throw new Error("Custom Error")
// }).then((data) => {
//     console.log("t 3");
// }).then((data) => {
//     console.log("t 4");
// }).then((data) => {
//     console.log("t 5");
// }).catch((error) => {
//     console.log(error.message);
// })

// let p1 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//         resolve('fasfasdf')
//     // }, 4000)
// })

// p1.then((data) => {
//     console.log("P1 called");
// })


// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('fasfasdf')
//     }, 1000)
// })

// p2.then((data) => {
//     console.log("P2 called");
// })


// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('fasfasdf')
//     }, 5000)
// })

// p3.then((data) => {
//     console.log("P3 called");
// })

// console.log("fasfasdf");

// for (let index = 0; index < 11; index++) {
//     console.log(index);
// }

// let promise = new Promise((resolve, reject) => {
//     resolve(10)
// })

// promise.then((data) => {
//     console.log(data);
//     return "Fasfasdfasdf";
// }).then((data) => {
//     console.log(data);
//     return "fasdfasfasdasf"
// })

// fetch('https://restcountries.com/v3.1/all')
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })

// async await
// async function getCountries() {
//     let response = await fetch('https://restcountries.com/v3.1/all')
    
//     let data = await response.json();
    
//     return data;
// }

// getCountries().then((data) => console.log(data))












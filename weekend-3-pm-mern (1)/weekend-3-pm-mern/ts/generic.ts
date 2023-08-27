// array 
// let array : number[] = [10,20,30,40];
// let array : Array<number> = [10,20,30,40];

// function
// function test(a: number) {
//     return a
// }

// function test<T>(a: T) {
//     return a
// }

// test<number>(10);
// test<string>("string");

// class
class Test<X,V> {
    a: X
    b: V;

    constructor(a: X, b: V) {
        this.a = a;
        this.b = b;
    }
}

let t = new Test<number, string>(10,"deepak");
console.log(t);

let t1 = new Test<number, number>(10,10);
console.log(t1);



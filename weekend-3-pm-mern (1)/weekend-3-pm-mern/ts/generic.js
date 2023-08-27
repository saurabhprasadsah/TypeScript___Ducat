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
var Test = /** @class */ (function () {
    function Test(a, b) {
        this.a = a;
        this.b = b;
    }
    return Test;
}());
var t = new Test(10, "deepak");
console.log(t);
var t1 = new Test(10, 10);
console.log(t1);

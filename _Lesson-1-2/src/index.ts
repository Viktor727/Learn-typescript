// 1
// const a: string = 'text';
// var b: string = 'text';
// let c: string = 'text';

// function foo<T, K, L>(param1: T, param2: K): L{
//     return param1 + param2;
// }

// foo<number, number, number>(1, 2)

// 2
// function identifier(param1: number, param2: number): number;
// function identifier(param1: boolean, param2: boolean): boolean;
// function identifier(param1: string, param2: string): string;
// function identifier(param1: object, param2: object): object;

// function identifier(param1: any, param2: any): any{
//     return param1 + param2;
// }

// identifier('a', "b")
// identifier(1, 2)

// 3
// const foo = <T>(param1: T, param2: T): T => {}

// 4
// class Fruit{
//     constructor(param1: string, param2: string);
//     constructor(param1, param2){
        
//     }

//     method(param1: string)
// }

// 5
// class MyClass {
//   private _myProperty: number = 0;

//   get myProperty(): number {
//     return this._myProperty;
//   }

//   set myProperty(value: number) {
//     if (value >= 0) {
//       this._myProperty = value;
//     } else {
//       console.log("Value must be non-negative.");
//     }
//   }
// }

// const myObject = new MyClass();
// console.log(myObject.myProperty); // Output: 0
// myObject.myProperty = 42; // This will call the setter and set _myProperty to 42
// console.log(myObject.myProperty); // Output: 42

// myObject.myProperty = -5; // This will call the setter, but the message will be logged


// 6
class Product {
  private _price: number;

  constructor(initialPrice: number) {
    this._price = initialPrice;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    if (newPrice >= 0) {
      this._price = newPrice;
    } else {
      console.log("Price must be non-negative.");
    }
  }
}

const myProduct = new Product(50); // Initialize with an initial price
console.log(myProduct.price); // Output: 50

myProduct.price = 75; // Set a new price, valid
console.log(myProduct.price); // Output: 75

myProduct.price = -10; // Attempt to set a negative price, will log a message
console.log(myProduct.price); // Output: 75 (unchanged)
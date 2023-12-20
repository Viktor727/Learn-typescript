// 1. Вам потрібно створити умовний тип, 
// Як параметр типу повинен обов'язково виступати функціональний тип.
type TSomething<T> = T extends (arg: infer P) => string ? P : never;

let funcA = (arg1: string | number): string => { return `Something return: ${arg1}`; }

let use1: TSomething<typeof funcA> = 'there will be text'; // має бути 'Something return'
console.log(use1);


// Для показу, що тут буде never
// let funcB = (arg1: string, arg2: string): string => { 
//   return `Something return: ${arg1}`;
// };

// let use2: TSomething<typeof funcB> = funcB(5); // має бути 'never'
// console.log(use2);







// 2. Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) 
// та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру
type TSomethingThree<T> = T extends (arg: infer P) => infer R ? [R, P] : never;

let funcC = (arg1: number): string => { return `Number: ${arg1}`; }

let use3: TSomethingThree<typeof funcC> = ["5", 5]; // має бути 'Something return'
console.log(use1);
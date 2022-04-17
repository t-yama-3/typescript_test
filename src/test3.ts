export {};

let str: string = '123456';

let num: number = Number(str);
console.log(num);

let str2: string = String(num);
console.log(str2);
console.log(typeof str2);

let num2: number = 9007199254740991;
num2 = -9007199254740991;
console.log(num2);

let num3: number = 2 ** 53;
console.log(num3);

let str3: string = '654321';
console.log(str3.valueOf() + 12);

// let num4: number = str.valueOf();
// console.log(num4);
// console.log(typeof num4);

let num4: number = Number(str3);
console.log(num4 + 10);

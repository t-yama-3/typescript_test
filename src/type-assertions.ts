export {};

let name: any = 'Ham';

let length = name.length as number;
// let length = (name as string).length;
// let length = (<string>name).length;

// length = 'foo';

console.log(typeof name);
console.log(length);

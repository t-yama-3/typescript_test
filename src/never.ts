export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// let bar: never = undefined;
let bar2: never = error('only me!');

console.log(foo);
console.log(bar2);

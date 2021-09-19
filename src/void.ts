export {};

function returnNothing1(): undefined {
  console.log('I don\'t return anything');
  return undefined;
}

console.log(returnNothing1());

function returnNothing(): void {
  console.log('I don\'t return anything');
}

console.log(returnNothing());

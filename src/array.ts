export {};

let numbers: number[] = [1, 2, 3];
console.log(numbers);

let numbers2: Array<number> = [1, 2, 3];
console.log(numbers2);

let strings1 = ['Tokyo', 'Osaka', 'Kyoto'];
console.log(strings1);
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];
console.log(strings2);

let strings: string[] = ['Typescript', 'JavaScript', 'CoffeeScript'];
console.log(strings);

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];
console.log(nijigenHairetsu);

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
console.log(hairetsu);

let hairetsu2: Array<string | number | boolean> = [1, false, 'Japan'];
console.log(hairetsu2);

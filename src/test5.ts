export {};

let n: number = 10;
let m: number = 5;
let arr1 = new Array<Array<number>>(n);
for (let i = 0; i < n; i++) {
  arr1[i] = new Array<number>(m);
  for (let j = 0; j < m; j++) {
    arr1[i][j] = i * 10 + j;
  }
}
console.log(arr1);

let arr2: number[][] = [];
for (let i = 0; i < 3; i++) {
  let tmp: number[] = [i, i, i];
  arr2.push(tmp); 
}
console.log(arr2);

let arr3: number[][] = new Array(3);
for (let i = 0; i < 3; i++) {
  let tmp: number[] = [i, i, i];
  arr3[i] = tmp;
}
console.log(arr3);

let arr4: Array<any> = new Array<any>(n);
for (let i: number = 0; i < n; i++) {
  arr4[i] = new Array<number>(m);
  for (let j: number = 0; j < m; j++) {
    arr4[i][j] = i * 10 + j;
  }
}
console.log(arr4);

let arr0 = [];
for (let i = 0; i < 5; i++) {
  let tmp = [];
  for (let j = 0; j < 6; j++) {
    tmp.push(i * 10 + j);
  }
  arr0.push(tmp);
}
console.log(arr0);

export {};

let bmi1 = (height: number, weight: number): number => {
  return weight / (height * height);
};
console.log(bmi1(1.78, 78));

let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / height ** 2;
};
console.log(bmi2(1.78, 78));

let bmi3 = (height: number, weight: number): number => weight / height ** 2;
console.log(bmi3(1.78, 65));

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.78, 78));

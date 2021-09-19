export {};

// let bmi = function(height: number, weight: number): number {
//   return weight / (height * height);
// };

let bmi: (height: number, weight: number) => number = function(
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 78));

export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// console.log(Months[0]);
console.log(Months[1]);
console.log(Months[11]);
console.log(Months[12]);

// const MonthsJs = {
//   January: 0,
//   February: 1
// };

// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

// COLORS.YELLOW;

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

console.log(COLORS.YELLOW);

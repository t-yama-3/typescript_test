export {};

const kansu = () => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(sumAny);

// console.log(typeof numberUnknown);
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}

export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
console.log(fooString);

const fooMojiretsu: Mojiretsu = 'Hello';
console.log(fooMojiretsu);

const exsample1 = {
  name: 'Ham',
  age: 43
};
console.log(exsample1);

type Profile = {
  name: string;
  age: number;
};

const exsample2: Profile = {
  name: 'Ham',
  age: 43
}
console.log(exsample2);

type Profile2 = typeof exsample1;

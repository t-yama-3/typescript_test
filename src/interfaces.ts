export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43
};
console.log(object);

export {};

// class Person {
//   public name: string;
//   protected age: number;
//
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// コンストラクタで初期化を行う
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('太郎', 20);
console.log(me);

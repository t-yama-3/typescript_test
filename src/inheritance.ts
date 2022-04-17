export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name); // 親クラスのコンストラクタメソッドそのもの
    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}Km/h.`;
  }
}

// class Lion extends Animal {
//   constructor(public name: string, public speed: number) {
//     super(name); // 親クラスのコンストラクタメソッドそのもの
//   }

//   run(): string {
//     return `I can run ${this.speed}Km`;
//   }
// }

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
